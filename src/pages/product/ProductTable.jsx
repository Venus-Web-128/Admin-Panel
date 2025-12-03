const ProductTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-center text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">دسته</th>
            <th className="px-4 py-2 border">عنوان</th>
            <th className="px-4 py-2 border">قیمت</th>
            <th className="px-4 py-2 border">موجودی</th>
            <th className="px-4 py-2 border">تعداد لایک</th>
            <th className="px-4 py-2 border">وضعیت</th>
            <th className="px-4 py-2 border">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 transition-colors">
            <td className="px-4 py-2 border">1</td>
            <td className="px-4 py-2 border">دسته شماره فلان</td>
            <td className="px-4 py-2 border">محصول شماره1</td>
            <td className="px-4 py-2 border">20,000 تومان</td>
            <td className="px-4 py-2 border">10</td>
            <td className="px-4 py-2 border">
              <span className="text-green-600 mx-2">30</span>
              <span className="text-red-600 mx-2">10</span>
            </td>
            <td className="px-4 py-2 border text-green-600">فعال</td>
            <td className="px-4 sm:py-3 py-8 border flex justify-center gap-2">
              <i
                className="fas fa-edit text-yellow-500 cursor-pointer"
                title="ویرایش محصول"
              ></i>
              <i
                className="fas fa-receipt text-blue-500 cursor-pointer"
                title="ثبت ویژگی"
              ></i>
              <i
                className="fas fa-times text-red-600 cursor-pointer"
                title="حذف محصول"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>

      {/* صفحه‌بندی */}
      <nav aria-label="Page navigation" className="flex justify-center mt-4">
        <ul className="flex gap-2">
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded  bg-blue-100 hover:bg-blue-200  transition duration-200"
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

export default ProductTable;
