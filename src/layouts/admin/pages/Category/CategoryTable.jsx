import PaginatedTable from "../../components/PaginatedTable";
import { FaProjectDiagram, FaEdit, FaPlus, FaTimes } from "react-icons/fa";


const CategoryTable = ({ setIsModalOpen }) => {
  const data = [
    { id: "1", category: "aaa", title: "bbb", price: "1111" },
    { id: "2", category: "ccc", title: "ddd", price: "2222" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "price", title: "قیمت محصول" },
  ];

  const additionField = {
    title: "عملیات",
    elements: (itemId) => (
      <div className="flex justify-center gap-2">
        <FaProjectDiagram className="text-blue-500 cursor-pointer" />
        <FaEdit className="text-yellow-500 cursor-pointer" />
        <FaPlus className="text-green-600 cursor-pointer" />
        <FaTimes className="text-red-600 cursor-pointer" />
      </div>
    ),
  };

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  return (
    <PaginatedTable
      data={data}
      dataInfo={dataInfo}
      additionField={additionField}
      searchParams={searchParams}
      numOfPage={10}
      setIsModalOpen={setIsModalOpen} // ✅ حالا درست پاس داده میشه
    />
  );
};

export default CategoryTable;
