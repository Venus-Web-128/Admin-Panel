import React from "react";

const ProductTable = () => {
  const rows = [
    { id: 1, name: "محصول فلان", status: "اتمام موجودی", bad: true },
    { id: 2, name: "محصول فلان", status: "اتمام موجودی", bad: true },
    { id: 3, name: "محصول فلان", status: "اتمام موجودی", bad: true },
    { id: 4, name: "محصول فلان", status: "رو به اتمام - 4", warn: true },
    { id: 5, name: "محصول فلان", status: "رو به اتمام - 2", warn: true },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-center text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">محصول</th>
            <th className="px-4 py-2 border">وضعیت</th>
            <th className="px-4 py-2 border">عملیات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{row.id}</td>
              <td className="px-4 py-2 border">{row.name}</td>
              <td
                className={`px-4 py-2 border ${
                  row.bad
                    ? "text-red-600"
                    : row.warn
                    ? "text-yellow-600"
                    : "text-gray-700"
                }`}
              >
                {row.status}
              </td>
              <td className="px-4 py-2 border">
                <button
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  title="نادیده گرفتن"
                  aria-label="ignore"
                >
                  <i className="fas fa-times"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
