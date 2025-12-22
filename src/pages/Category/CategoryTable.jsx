import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import PaginatedTable from "../../components/PaginatedTable";
import { getCategoriesService } from "../../services/category";
import { convertDateToJalali } from "../../utils/ConvertDateToJalali";
import AddCategory from "./AddCategory";
import Actions from "../Category/tableAddtion/Action";
import ShowInMenu from "../Category/tableAddtion/showInMeno";

const CategoryTable = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [forceRender, setForceRender] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleGetCategories = async () => {
    setLoading(true)
    try {
      const res = await getCategoriesService(params.categoryId);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, [params, forceRender]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
  ];

  const additionField = [
    {
      title: "تاریخ",
      elements: (rowData) => convertDateToJalali(rowData.created_at),
    },
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} setForceRender={setForceRender} setIsModalOpen={setIsModalOpen} />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  return (
    <>
      <Outlet />
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOfPage={8} // ✅ اصلاح شد
        searchParams={searchParams}
        setIsModalOpen={setIsModalOpen}
         loading={loading}  
      >
        <AddCategory
          setForceRender={setForceRender}
          onClose={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
        />
      </PaginatedTable>
    </>
  );
};

export default CategoryTable;
