import React from "react";

const Leftcontent = () => {
  return (
    <div className="flex items-center gap-4">
      {/* نوتیفیکیشن */}
      <button
        className="relative text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        aria-label="اعلان‌ها"
      >
        <i className="far fa-bell"></i>
        <span className="absolute -top-1 -left-1 bg-red-600 text-white text-[10px] leading-none rounded-full px-1 py-2px">
          1
        </span>
      </button>

      {/* جستجو */}
      <button
        className="text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        aria-label="جستجو"
      >
        <i className="fas fa-search"></i>
      </button>

      {/* منوی کاربر */}
      <div className="relative">
        <button
          className="text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="منوی کاربر"
        >
          <i className="fas fa-grip-vertical"></i>
        </button>

        {/* منو (نمایش/پنهان را بعداً با state کنترل کن) */}
        <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md overflow-hidden">
          <li className="py-2 text-center border-b border-gray-200">قاسم سلیمانی</li>
          <li className="py-2 px-3 flex items-center gap-2 hover:bg-gray-50">
            <i className="fas fa-tachometer-alt"></i>
            <a href="#" className="text-sm">داشبورد</a>
          </li>
          <li className="py-2 px-3 flex items-center gap-2 hover:bg-gray-50">
            <i className="fas fa-paper-plane"></i>
            <a href="#" className="text-sm">تیکت‌ها</a>
          </li>
          <li className="py-2 px-3 flex items-center gap-2 hover:bg-gray-50">
            <i className="fas fa-envelope"></i>
            <a href="#" className="text-sm">پیام‌ها</a>
          </li>
          <li className="border-t border-gray-200"></li>
          <li className="py-2 px-3 flex items-center gap-2 hover:bg-gray-50">
            <i className="fas fa-power-off"></i>
            <a href="#" className="text-sm">خروج</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftcontent;
