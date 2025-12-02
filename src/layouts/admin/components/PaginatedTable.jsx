import React, { useEffect, useState } from "react";

const PaginatedTable = ({ data, dataInfo, additionField, numOfPage = 10 }) => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let pCount = Math.ceil(data.length / numOfPage);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr.push(i);
    setPages(pArr);

    // اگر داده کمتر از numOfPage باشه، همه رو نشون بده
    if (data.length <= numOfPage) {
      setTableData(data);
    } else {
      let start = (currentPage - 1) * numOfPage;
      let end = currentPage * numOfPage;
      setTableData(data.slice(start, end));
    }
  }, [data, currentPage, numOfPage]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-center text-sm">
        <thead className="bg-gray-200">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field} className="px-4 py-2 border">
                {i.title}
              </th>
            ))}
            {additionField ? (
              <th className="px-4 py-2 border">{additionField.title}</th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d) => (
            <tr key={d.id} className="hover:bg-gray-100 transition-colors">
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id} className="px-4 py-2 border">
                  {d[i.field]}
                </td>
              ))}
              {additionField ? (
                <td className="px-4 py-2 border">
                  {additionField.elements(d.id)}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>

      {/* فقط وقتی داده بیشتر از numOfPage باشه صفحه‌بندی نشون بده */}
      {data.length > numOfPage && (
        <nav aria-label="Page navigation" className="flex justify-center mt-4">
          <ul className="flex gap-2">
            <li>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                &laquo;
              </button>
            </li>
            {pages.map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 border rounded hover:bg-gray-100 ${
                    currentPage === page ? "bg-gray-300" : ""
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, pages.length))
                }
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default PaginatedTable;
