import AddColor from "./AddColor";
import ColorsTable from "./ColorsTable";

const Colors = () => {
  return (
    <div id="manage_color_section" className="main_section px-4 py-6">
      <h4 className="text-center my-3 text-xl font-bold">مدیریت رنگ ها</h4>

      <div className="flex flex-wrap justify-between items-center mb-6">
        {/* بخش جستجو */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <div className="flex items-center border rounded-lg shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="قسمتی از عنوان را وارد کنید"
              className="grow px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="bg-gray-200 px-4 py-2 text-sm font-medium">
              جستجو
            </span>
          </div>
        </div>

        {/* دکمه افزودن رنگ */}
        <div className="w-full md:w-auto flex justify-end">
          <AddColor />
        </div>
      </div>

      {/* جدول رنگ‌ها */}
      <ColorsTable />
    </div>
  );
};

export default Colors;
