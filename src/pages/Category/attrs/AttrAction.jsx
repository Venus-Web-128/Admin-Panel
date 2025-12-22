import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { deleteAttrService } from "../../../services/categoryAtter";
import Swal from "sweetalert2";

const AttrAction = ({ rowData, onDeleted, setAttertoEdit }) => {
  const handleDelete = async () => {

    const result = await Swal.fire({
      icon: "warning",
      title: "آیا مطمئن هستید؟",
      text: "این ویژگی حذف خواهد شد و قابل بازگشت نیست!",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "انصراف",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteAttrService(rowData.id);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "موفقیت",
            text: "ویژگی با موفقیت حذف شد",
            confirmButtonText: "باشه",
          });
          if (onDeleted) {
            await onDeleted(); // صبر کن تا لیست جدید بیاد
          }
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
    <div>
      <FontAwesomeIcon
        icon={faEdit}
        className="text-yellow-500 mx-1 cursor-pointer hover:text-yellow-600"
        title="ویرایش ویژگی"
        onClick={() => setAttertoEdit(rowData)}
      />
      <FontAwesomeIcon
        icon={faTimes}
        className="text-red-500 mx-1 cursor-pointer hover:text-red-600"
        title="حذف ویژگی"
        onClick={handleDelete}
      />
    </div>
  );
};

export default AttrAction;
