
const ColorsTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">نام رنگ</th>
              <th className="px-4 py-2 border">کد رنگ</th>
              <th className="px-4 py-2 border">رنگ</th>
              <th className="px-4 py-2 border">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">مشکی</td>
              <td className="px-4 py-2 border">#000000</td>
              <td className="px-4 py-2 border">
                <div
                  className="w-full h-8 rounded"
                  style={{ background: "#000" }}
                ></div>
              </td>
              <td className="px-4 py-2 border">
                <i
                  className="fas fa-times text-red-600 mx-1 cursor-pointer"
                  title="حذف رنگ"
                ></i>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">2</td>
              <td className="px-4 py-2 border">قرمز</td>
              <td className="px-4 py-2 border dir_ltr">#f44336</td>
              <td className="px-4 py-2 border">
                <div
                  className="w-full h-8 rounded"
                  style={{ background: "#f44336" }}
                ></div>
              </td>
              <td className="px-4 py-2 border">
                <i
                  className="fas fa-times text-red-600 mx-1 cursor-pointer"
                  title="حذف رنگ"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* صفحه‌بندی */}
      <nav aria-label="Page navigation" className="flex justify-center mt-4">
        <ul className="flex space-x-2">
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded hover:bg-gray-100"
              aria-label="Previous"
            >
              &raquo;
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-1 border rounded hover:bg-gray-100">
              1
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-1 border rounded hover:bg-gray-100">
              2
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-1 border rounded hover:bg-gray-100">
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded hover:bg-gray-100"
              aria-label="Next"
            >
              &laquo;
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ColorsTable;
