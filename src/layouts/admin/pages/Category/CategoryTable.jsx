import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaProjectDiagram, FaEdit, FaPlus, FaTimes } from "react-icons/fa";
import PaginatedTable from "../../components/PaginatedTable";

const CategoryTable = () => {
  const data = [
    { id: "1", category: "aaa", title: "bbb", price: "1111", stock: "5", like_count: "2", status: "1" },
    { id: "2", category: "ccc", title: "ddd", price: "2222", stock: "7", like_count: "2", status: "1" },
    { id: "3", category: "ccc", title: "ddd", price: "2222", stock: "7", like_count: "2", status: "1" },
    { id: "4", category: "ccc", title: "ddd", price: "2222", stock: "7", like_count: "2", status: "1" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "price", title: "قیمت محصول" },
  ];

  const additionalElements = (itemId) => (
    <div className="flex justify-center gap-2">
      <FaProjectDiagram
        className="text-blue-500 cursor-pointer"
        title="زیرمجموعه"
        onClick={() => console.log("sub category", itemId)}
      />
      <FaEdit
        className="text-yellow-500 cursor-pointer"
        title="ویرایش دسته"
        onClick={() => console.log("edit category", itemId)}
      />
      <FaPlus
        className="text-green-600 cursor-pointer"
        title="افزودن ویژگی"
        onClick={() => console.log("add attr", itemId)}
      />
      <FaTimes
        className="text-red-600 cursor-pointer"
        title="حذف دسته"
        onClick={() => console.log("delete category", itemId)}
      />
    </div>
  );

  const additionField = {
    title: "عملیات",
    elements: (itemId) => additionalElements(itemId),
  };

  return (
    <PaginatedTable data={data} dataInfo={dataInfo} additionField={additionField} />
  );
};

export default CategoryTable;
