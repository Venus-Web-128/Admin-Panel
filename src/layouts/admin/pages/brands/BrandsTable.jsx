
const Brandstable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">عنوان</th>
              <th className="px-4 py-2 border">عنوان فارسی</th>
              <th className="px-4 py-2 border">توضیحات</th>
              <th className="px-4 py-2 border">لوگو</th>
              <th className="px-4 py-2 border">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">brand 1</td>
              <td className="px-4 py-2 border">برند شماره 1</td>
              <td className="px-4 py-2 border">توضیحات اجمالی در مورد این برند</td>
              <td className="px-4 py-2 border">
                <img src="/assets/images/logo.png" alt="لوگو" className="w-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border">
                <i
                  className="fas fa-edit text-yellow-500 mx-1 cursor-pointer"
                  title="ویرایش برند"
                ></i>
                <i
                  className="fas fa-times text-red-600 mx-1 cursor-pointer"
                  title="حذف برند"
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

export default Brandstable;
