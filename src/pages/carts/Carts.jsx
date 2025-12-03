import React from "react";
import AddCart from "./AddCart";

const Carts = () => {
  return (
    <div id="manage_cart_section" className="main_section p-4">
      <h4 className="text-center my-3 text-xl font-bold">مدیریت سبد خرید</h4>

      {/* بخش جستجو و افزودن */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-3 md:mb-0">
          <div className="flex dir_ltr">
            <input
              type="text"
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="قسمتی از نام یا شماره سبد را وارد کنید"
            />
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-lg">
              جستجو
            </span>
          </div>
        </div>
        <div className="flex justify-end w-full md:w-auto">
          <AddCart />
        </div>
      </div>

      {/* جدول سبدها */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center rounded-lg shadow-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">آی دی مشتری</th>
              <th className="px-4 py-2 border">نام مشتری</th>
              <th className="px-4 py-2 border">تاریخ</th>
              <th className="px-4 py-2 border">مبلغ کل سبد</th>
              <th className="px-4 py-2 border">وضعیت</th>
              <th className="px-4 py-2 border">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">50</td>
              <td className="px-4 py-2 border">قاسم بساکی</td>
              <td className="px-4 py-2 border">1400/07/15</td>
              <td className="px-4 py-2 border">100 هزار تومان</td>
              <td className="px-4 py-2 border text-green-600 font-medium">
                فعال
              </td>
              <td className="px-4 py-2 border">
                <i
                  className="fas fa-edit text-yellow-600 mx-1 cursor-pointer"
                  title="ویرایش و جزئیات سبد"
                ></i>
                <i
                  className="fas fa-times text-red-500 mx-1 cursor-pointer"
                  title="حذف سبد"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* صفحه‌بندی */}
      <nav className="flex justify-center mt-4">
        <ul className="flex space-x-2 dir_ltr">
          <li>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              &raquo;
            </button>
          </li>
          <li>
            <button className="px-3 py-1 border rounded bg-gray-200 text-gray-700 hover:bg-gray-300">
              1
            </button>
          </li>
          <li>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              2
            </button>
          </li>
          <li>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              3
            </button>
          </li>
          <li>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              &laquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Carts;
