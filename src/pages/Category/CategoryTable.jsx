import PaginatedTable from "../../components/PaginatedTable";
import { getCategoriesService } from "../../services/category";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ShowInMenu from "./tableAddtion/showInMeno";
import Actions from "./tableAddtion/Action";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { convertDateToJalali } from "../../utils/ConvertDateToJalali";

const CategoryTable = ({ setIsModalOpen }) => {
  const params = useParams()
  const location = useLocation()
  const [data, setData] = useState([]);

  const handleGetCategories = async () => {
    try {
      const res = await getCategoriesService(params.categoryId);
      if (res.status === 200) {
        setData(res.data.data);
      } else {
        Swal.fire({
          icon: "error",
          text: "اطلاعات دریافت نشد",
          confirmButtonText: "متوجه شدم",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        text: "مشکلی از سمت سرور پیش آمده",
        confirmButtonText: "متوجه شدم",
      });
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, [params.categoryId]);


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
      elements: (rowData) => <Actions rowData={rowData} />,
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
        searchParams={searchParams}
        numOfPage={10}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default CategoryTable;
