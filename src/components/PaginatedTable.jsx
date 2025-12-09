import React, { useEffect, useState } from "react";

const PaginatedTable = ({ setIsModalOpen, data, dataInfo, additionField = [], searchParams, numOfPage = 10 }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  // فیلتر کردن داده‌ها بر اساس جستجو
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) =>
          item[searchParams.searchField]
            ?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    }
    setCurrentPage(1);
  }, [searchTerm, data, searchParams.searchField]);

  // صفحه‌بندی
  useEffect(() => {
    let pCount = Math.ceil(filteredData.length / numOfPage);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr.push(i);
    setPages(pArr);

    let start = (currentPage - 1) * numOfPage;
    let end = currentPage * numOfPage;
    setTableData(filteredData.slice(start, end));
  }, [filteredData, currentPage, numOfPage]);

  return (
    <div className="overflow-x-auto">
      {/* بخش جستجو + دکمه افزودن دسته */}
      {searchParams && (
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder={searchParams.placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg px-3 py-2 w-1/2 shadow-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 cursor-pointer hover:bg-green-700 duration-300 text-white rounded-full p-3 flex items-center justify-center transition-colors"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      )}

      {/* جدول */}
      <table className="min-w-full border border-gray-300 text-center text-sm">
        <thead className="bg-gray-200">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field} className="px-4 py-2 border">
                {i.title}
              </th>
            ))}
            {additionField.map((a, index) => (
              <th key={index} className="px-4 py-2 border">
                {a.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d) => (
            <tr key={d.id} className="hover:bg-gray-100 transition-colors">
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id} className="px-4 py-2 border">
                  {i.field === "created_at"
                    ? convertDateToJalali(d.created_at)
                    : d[i.field]}
                </td>
              ))}
              {additionField.map((a, index) => (
                <td key={index} className="px-4 py-2 border">
                  {a.elements(d)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* صفحه‌بندی */}
      {filteredData.length > numOfPage && (
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
                  className={`px-3 py-1 border rounded hover:bg-gray-100 ${currentPage === page ? "bg-gray-300" : ""
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
