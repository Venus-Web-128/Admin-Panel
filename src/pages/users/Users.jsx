import AddUser from "./AddUser";

const Users = () => {

  return (
    <div id="manage_user_section" className="main_section p-4">
      <h4 className="text-center my-3 text-xl font-bold">مدیریت کاربران</h4>

      {/* بخش جستجو و افزودن */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* جستجو */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-3 md:mb-0">
          <div className="flex dir_ltr">
            <input
              type="text"
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="قسمتی از نام یا نام خانوادگی را وارد کنید"
            />
            <span className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg">
              جستجو
            </span>
          </div>
        </div>

        {/* افزودن کاربر */}
        <div className="flex justify-end w-full md:w-auto">
          <AddUser />
        </div>
      </div>

      {/* جدول کاربران */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center rounded-lg shadow-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">نام و نام خانوادگی</th>
              <th className="px-4 py-2 border">موبایل</th>
              <th className="px-4 py-2 border">ایمیل</th>
              <th className="px-4 py-2 border">نقش</th>
              <th className="px-4 py-2 border">تاریخ ثبت نام</th>
              <th className="px-4 py-2 border">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">قاسم بساکی</td>
              <td className="px-4 py-2 border">09110110011</td>
              <td className="px-4 py-2 border">mahdicmptr@gmail.com</td>
              <td className="px-4 py-2 border">کاربر</td>
              <td className="px-4 py-2 border">1400/10/12</td>
              <td className="px-4 py-2 border">
                <i
                  className="fas fa-edit text-yellow-600 mx-1 cursor-pointer"
                  title="جزئیات و ویرایش کاربر"
                ></i>
                <i
                  className="fas fa-times text-red-500 mx-1 cursor-pointer"
                  title="حذف کاربر"
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

export default Users;
