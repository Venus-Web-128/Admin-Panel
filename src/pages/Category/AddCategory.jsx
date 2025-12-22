import React, { useContext, useEffect, useState } from "react";
import ModalsContainer from "../../components/ModalsContiener";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../../components/form/FormikControl";
import { createNewCategoryService, editCategoryService, getCategoriesService, getSingleCategoryService } from "../../services/category";
import SubmitButton from "../../components/form/SubmitButton";
import { CategoryContext } from "../../Contexts/CategoryContext";
import { useParams } from "react-router-dom";


const initialValues = {
  parent_id: "",
  title: "",
  description: "",
  image: null,
  is_active: true,
  show_in_menu: true,
};

const onSubmit = async (values, actions, setForceRender, onClose, editId) => {
  try {
    values = {
      ...values,
      is_active: values.is_active ? 1 : 0,
      show_in_menu: values.show_in_menu ? 1 : 0,
    };

    if (editId) {
      const res = await editCategoryService(editId, values);
      if (res.status === 200) {
        setForceRender(last => last + 1);
        onClose();
      }
    } else {
      const res = await createNewCategoryService(values);
      if (res.status === 201) {
        actions.resetForm();
        setForceRender(last => last + 1);
        onClose();
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};


const validationSchema = Yup.object({
  parent_id: Yup.number(),
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
  description: Yup.string().matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
  image: Yup.mixed()
    .nullable()
    .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) =>
      !value ? true : value.size <= 500 * 1024
    )
    .test("format", "فرمت فایل باید jpg باشد", (value) =>
      !value ? true : value.type === "image/jpeg"
    ),
  is_active: Yup.boolean(),
  show_in_menu: Yup.boolean(),
});


const AddCategory = ({ setForceRender, isOpen, onClose }) => {
  const [parents, setParents] = useState([]);
  const params = useParams();
  const [editCategory, setEditCategory] = useState(null)
  const { editId } = useContext(CategoryContext)
  const [reInitialValues, setReInitialValues] = useState(null)

  const handleGetSingleCategories = async () => {
    try {
      const res = await getSingleCategoryService(editId)
      if (res.status === 200) {
        const oldCateory = res.data.data;
        setEditCategory(oldCateory)
      }
    } catch {
      console.log("متاسفانه دسته مورد نظر پیدا نشد");
    }
  }

  const handleGetParentsCategories = async () => {
    try {
      const res = await getCategoriesService();
      if (res.status === 200) {
        const allParents = res.data.data;
        setParents(allParents.map((p) => ({ id: p.id, value: p.title })));
      }
    } catch (error) {
      console.log("متاسفانه دسته بندی های والد دریافت نشد");
    }
  };

  useEffect(() => {
    if (editId) {
      handleGetSingleCategories();
    } else {
      setEditCategory(null);
    }
  }, [editId]);


  useEffect(() => {
    handleGetParentsCategories();
  }, []);


  useEffect(() => {
    if (editCategory) {
      setReInitialValues({
        parent_id: editCategory.parent_id || "",
        title: editCategory.title || "",
        description: editCategory.description || "",
        image: null,
        is_active: editCategory.is_active ? true : false,
        show_in_menu: editCategory.show_in_menu ? true : false,
      });
    } else if (params.categoryId) {
      setReInitialValues({
        ...initialValues,
        parent_id: params.categoryId,
      });
    } else {
      setReInitialValues(initialValues); // ❌ به جای null، مقدار اولیه کامل بده
    }
  }, [params.categoryId, editCategory]);


  return (
    <>

      <ModalsContainer
        isOpen={isOpen}
        onClose={onClose}
        fullScreen={false}
        id="add_product_category_modal"
        title={editId ? "ویرایش : " + (editCategory ? editCategory.title : "") : "افزودن دسته محصولات"}>
        <Formik
          initialValues={reInitialValues || initialValues}
          onSubmit={(values, actions) => onSubmit(values, actions, setForceRender, onClose, editId)}
          validationSchema={validationSchema}
          enableReinitialize
        >
          <Form>
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {parents.length > 0 && (
                  <FormikControl
                    className="w-full md:w-1/2 lg:w-2/3"
                    control="select"
                    options={parents}
                    name="parent_id"
                    label="دسته والد"
                  />
                )}
                <FormikControl
                  className="w-full md:w-1/2 lg:w-2/3"
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان دسته"
                  placeholder="عنوان دسته"
                />
                <FormikControl
                  className="w-full md:w-1/2 lg:w-2/3"
                  control="textarea"
                  name="description"
                  label="توضیحات"
                  placeholder="توضیحات"
                />
                {editId ?
                  (<FormikControl
                    className="w-full md:w-1/2 lg:w-2/3"
                    control="file"
                    name="image"
                    label="تصویر"
                    placeholder="تصویر"
                  />) : null}
                <div className="w-full md:w-1/2 lg:w-2/3 flex justify-center gap-6">
                  <div className="w-full md:w-1/3 lg:w-1/4">
                    <FormikControl control="switch" name="is_active" label="وضعیت فعال" />
                  </div>
                  <div className="w-full md:w-1/3 lg:w-1/4">
                    <FormikControl control="switch" name="show_in_menu" label="نمایش در منو" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 text-center mt-4">
                  <SubmitButton />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </ModalsContainer>
    </>
  );
};

export default AddCategory;
