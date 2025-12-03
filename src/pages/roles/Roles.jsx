import React, { useState } from "react";
import AddRole from "./AddRole";

const Roles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div id="manage_role_section" className="main_section p-4">
      <h4 className="text-center my-3 text-xl font-bold">مدیریت نقش‌ها</h4>

      {/* بخش جستجو و افزودن */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* جستجو */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-3 md:mb-0">
          <div className="flex dir_ltr">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="قسمتی از نام نقش را وارد کنید"
            />
            <span className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg">
              جستجو
            </span>
          </div>
        </div>

        {/* افزودن نقش */}
        <div className="flex justify-end w-full md:w-auto">
          <AddRole />
        </div>
      </div>

      {/* جدول نقش‌ها */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center rounded-lg shadow-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">عنوان</th>
              <th className="px-4 py-2 border">توضیحات</th>
              <th className="px-4 py-2 border">وضعیت</th>
              <th className="px-4 py-2 border">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">نقش شماره 1</td>
              <td className="px-4 py-2 border">
                توضیحات در مورد این نقش که چیست و کلیات آن کدام است
              </td>
              <td className="px-4 py-2 border">
                <label className="inline-flex items-center cursor-pointer">
                  <span className="mr-2">فعال</span>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                    defaultChecked
                  />
                </label>
              </td>
              <td className="px-4 py-2 border">
                <i
                  className="fas fa-edit text-yellow-600 mx-1 cursor-pointer"
                  title="ویرایش نقش"
                ></i>
                <i
                  className="fas fa-times text-red-500 mx-1 cursor-pointer"
                  title="حذف نقش"
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

export default Roles;
