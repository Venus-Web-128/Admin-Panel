import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram, faEdit, faFileInvoice, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteCategoryService } from "../../../services/category";
import { useContext } from "react";
import { CategoryContext } from "../../../Contexts/CategoryContext";

const Actions = ({ rowData, setForceRender, setIsModalOpen }) => {
  const { setEditId } = useContext(CategoryContext)
  const navigate = useNavigate();
  const params = useParams();

  const handleDelete = async () => {
    const result = await Swal.fire({
      icon: "warning",
      title: "آیا مطمئن هستید؟",
      text: "این دسته حذف خواهد شد و قابل بازگشت نیست!",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "انصراف",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteCategoryService(rowData.id);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "موفقیت",
            text: "دسته با موفقیت حذف شد",
            confirmButtonText: "باشه",
          });
          setForceRender(last => last + 1); // جدول رفرش
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: error.response?.data?.message || "مشکلی رخ داد",
        });
      }
    }
  };

  return (
    <>
      {!params.categoryId && (
        <FontAwesomeIcon
          icon={faProjectDiagram}
          className="text-sky-500 mx-1 cursor-pointer hover:text-sky-600"
          title="زیرمجموعه"
          onClick={() =>
            navigate(`/categories/${rowData.id}`, {
              state: { parentData: rowData },
            })
          }
        />
      )}
      <FontAwesomeIcon
        icon={faEdit}
        className="text-yellow-500 mx-1 cursor-pointer hover:text-yellow-600"
        title="ویرایش دسته"
        onClick={() => {
          setEditId(rowData.id);
          setIsModalOpen(true); // 👈 این خط اضافه شد
        }}
      />
      {params.categoryId ? (
        <FontAwesomeIcon
          icon={faFileInvoice}
          className="text-green-500 mx-1 cursor-pointer hover:text-green-600"
          title="افزودن ویژگی"
          onClick={() =>
            navigate(`/categories/${rowData.id}/attributes`, {
              state: { categoryData: rowData },
            })
          }
        />
      ) : null}
      <FontAwesomeIcon
        icon={faTimes}
        className="text-red-500 mx-1 cursor-pointer hover:text-red-600"
        onClick={handleDelete}
        title="حذف دسته"
      />
    </>
  );
};

export default Actions;
