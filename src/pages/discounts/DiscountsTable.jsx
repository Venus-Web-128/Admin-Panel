import React from "react";

const DiscountsTable = ({ discounts = [] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-center rounded-lg shadow-sm">
        {/* هدر جدول */}
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">عنوان</th>
            <th className="px-4 py-2 border">کد</th>
            <th className="px-4 py-2 border">درصد تخفیف</th>
            <th className="px-4 py-2 border">تا تاریخ</th>
            <th className="px-4 py-2 border">برای</th>
            <th className="px-4 py-2 border">عملیات</th>
          </tr>
        </thead>

        {/* بدنه جدول */}
        <tbody>
          {discounts.length > 0 ? (
            discounts.map((d, index) => (
              <tr
                key={d.id}
                className={
                  index % 2 === 0
                    ? "bg-white hover:bg-gray-50"
                    : "bg-gray-50 hover:bg-gray-100"
                }
              >
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{d.title}</td>
                <td className="px-4 py-2 border">{d.code}</td>
                <td className="px-4 py-2 border text-gray-700 font-medium">
                  {d.percent}%
                </td>
                <td className="px-4 py-2 border">{d.expireDate}</td>
                <td className="px-4 py-2 border">{d.for}</td>
                <td className="px-4 py-2 border">
                  <i
                    className="fas fa-edit text-yellow-600 mx-1 cursor-pointer"
                    title="ویرایش"
                  ></i>
                  <i
                    className="fas fa-times text-red-500 mx-1 cursor-pointer"
                    title="حذف"
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="px-4 py-6 text-gray-500">
                هیچ کدی ثبت نشده
              </td>
            </tr>
          )}
        </tbody>
      </table>

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

export default DiscountsTable;
