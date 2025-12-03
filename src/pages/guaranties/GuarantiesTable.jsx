
const GuarantiesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">عنوان گارانتی</th>
            <th className="px-4 py-2 border">مدت گارانتی</th>
            <th className="px-4 py-2 border">توضیحات</th>
            <th className="px-4 py-2 border">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border">1</td>
            <td className="px-4 py-2 border">گارانتی 1</td>
            <td className="px-4 py-2 border">12 ماه</td>
            <td className="px-4 py-2 border">
              توضیحات اجمالی در مورد این گارانتی
            </td>
            <td className="px-4 py-2 border">
              <button
                className="text-red-600 hover:text-red-800"
                title="حذف گارانتی"
              >
                <i className="fas fa-times"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Pagination */}
      <nav className="flex justify-center mt-4">
        <ul className="flex space-x-2 dir_ltr">
          <li>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              &raquo;
            </button>
          </li>
          <li>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
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

export default GuarantiesTable;
