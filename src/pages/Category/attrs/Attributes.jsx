import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PaginatedTable from "../../../components/PaginatedTable";
import PrevPageButton from "../../../components/PrevPageButton";
import { getCategoryAttrsService, createAttrService, editCategoryAttrService } from "../../../services/categoryAtter";
import AttrAction from "../attrs/AttrAction";
import ShowInFilter from "../attrs/ShowInFilter";
import { Formik, Form, FastField } from "formik";
import SubmitButton from "../../../components/form/SubmitButton";
import Swal from "sweetalert2";




const initialValues = {
  title: "",
  unit: "",
  showInFilter: false
};


const dataInfo = [
  { field: "id", title: "#" },
  { field: "title", title: "عنوان ویژگی" },
  { field: "unit", title: "واحد ویژگی" }
];

const onSubmit = async (values, actions, catId, setData, attrToEdit, setAttrToEdit) => {
  try {
    values = {
      ...values,
      in_filter: values.showInFilter ? 1 : 0
    }
    if (attrToEdit) {
      const res = await editCategoryAttrService(attrToEdit.id, values);
      if (res.status === 200) {
        setData(oldData => {
          const newData = [...oldData]
          const index = newData.findIndex(d => d.id === attrToEdit.id)
          newData[index] = res.data.data
          return newData
        });
        Swal.fire({
          icon: "success",
          title: "موفقیت",
          text: "اطلاعات با موفقیت ذخیره شد",
          confirmButtonText: "متوجه شدم",
        });
        setAttrToEdit(null)
      }
    } else {
      const res = await createAttrService(catId, values);
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "موفقیت",
          text: "اطلاعات با موفقیت اضافه شد",
          confirmButtonText: "متوجه شدم",
        });

        setData(oldData => [...oldData, res.data.data])
        actions.resetForm();

      }
    }
  } catch (error) {
    console.log(error.message);
  }
};




const AddAttributes = () => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [attertoEdit, setAttertoEdit] = useState(null);

  const additionField = [
    {
      title: "نمایش در فیلتر",
      elements: (rowData) => <ShowInFilter rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) =>
        <AttrAction
          rowData={rowData}
          onDeleted={handleGetCategoryAttrs}
          attertoEdit={attertoEdit}
          setAttertoEdit={setAttertoEdit}
        />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetCategoryAttrs = async () => {
    setLoading(true);
    try {
      const res = await getCategoryAttrsService(location.state.categoryData.id);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCategoryAttrs();
  }, []);


  return (
    <Formik
      initialValues={{
        title: attertoEdit ? attertoEdit.title : "",
        unit: attertoEdit ? attertoEdit.unit : "",
        showInFilter: attertoEdit ? !!attertoEdit.in_filter : false,
      }}
      enableReinitialize
      onSubmit={(values, actions) =>
        onSubmit(values, actions, location.state.categoryData.id, setData, attertoEdit, setAttertoEdit)
      }
    >
      <Form >
        <h4 className="text-center my-3">مدیریت ویژگی‌های دسته‌بندی</h4>
        <h6 className="text-center my-3">
          ویژگی‌های :
          <span className="text-blue-600 font-bold">
            {location.state.categoryData.title}
          </span>
        </h6>

        <div className="max-w-6xl mx-auto px-4">
          <div className="flex  justify-center gap-4 my-4">
            {/* عنوان ویژگی */}
            <div className="w-full md:w-1/2 lg:w-2/3">
              <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-700">
                عنوان ویژگی
              </label>
              <FastField
                id="title"
                name="title"
                placeholder="عنوان ویژگی جدید"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* واحد ویژگی */}
            <div className="w-full md:w-1/2 lg:w-2/3">
              <label htmlFor="unit" className="block mb-1 text-sm font-medium text-gray-700">
                واحد ویژگی
              </label>
              <FastField
                id="unit"
                name="unit"
                placeholder="نوع ویژگی جدید"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* نمایش در فیلتر */}
            <div className="flex items-center gap-2 w-full md:w-1/2 lg:w-1/3 mt-4">
              <FastField
                id="showInFilter"
                type="checkbox"
                name="showInFilter"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="showInFilter" className="text-sm font-medium text-gray-700">
                نمایش در فیلتر
              </label>
            </div>
          </div>

          <div className="mb-5" >
            <SubmitButton type="submit" />
          </div>
        </div>

        <PaginatedTable
          data={data}
          dataInfo={dataInfo}
          additionField={additionField}
          numOfPage={10}
          searchParams={searchParams}
          loading={loading}
        >
          <div className="mt-4">
            <PrevPageButton />
          </div>
        </PaginatedTable>
      </Form>
    </Formik>
  );
};

export default AddAttributes;
