
const Categorytable = () => {
  return (
    <div className="">
      <table className="min-w-full border border-gray-300 text-center text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">عنوان</th>
            <th className="px-4 py-2 border">وضعیت</th>
            <th className="px-4 py-2 border">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((id) => (
            <tr
              key={id}
              className="hover:bg-gray-100 transition-colors"
            >
              <td className="px-4 py-2 border">{id}</td>
              <td className="px-4 py-2 font-bold border">دسته شماره فلان</td>
              <td className="px-4 py-2 border font-bold text-green-700">فعال</td>
              <td className="px-4 py-8 sm:py-4 border flex justify-center ">
                <i
                  className="fas fa-project-diagram text-blue-500 cursor-pointer"
                  title="زیرمجموعه"
                ></i>
                <i
                  className="fas fa-edit text-yellow-500 cursor-pointer"
                  title="ویرایش دسته"
                ></i>
                <i
                  className="fas fa-plus text-green-600 cursor-pointer"
                  title="افزودن ویژگی"
                ></i>
                <i
                  className="fas fa-times text-red-600 cursor-pointer"
                  title="حذف دسته"
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* صفحه‌بندی */}
      <nav aria-label="Page navigation" className="flex justify-center mt-4">
        <ul className="flex gap-2">
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded bg-blue-100 hover:bg-blue-200  transition duration-200"
              aria-label="Previous"
            >
              &raquo;
            </a>
          </li>
          {[1, 2, 3].map((page) => (
            <li key={page}>
              <a
                href="#"
                className="px-3 py-1 border rounded bg-blue-100 hover:bg-blue-200  transition duration-200"
              >
                {page}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded bg-blue-100 hover:bg-blue-200  transition duration-200"
              aria-label="Next"
            >
              &laquo;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Categorytable;
