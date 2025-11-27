import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="fixed top-0 inset-x-0 h-16 bg-gray-800 text-white shadow-md z-50 flex items-center justify-between px-4">
      {/* لوگو */}
      <a href="/" className="flex items-center h-full">
        <img src="/assets/images/logo.png" className="h-10 w-auto" alt="لوگو" />
      </a>

      {/* آیتم‌های سمت چپ */}
      <div className="flex items-center gap-6">
        {/* پیام‌ها */}
        <button
          className="relative flex items-center cursor-pointer gap-2 text-sm focus:outline-none hover:text-blue-400 transition-colors duration-300"
        >
          <i className="fas fa-envelope"></i>
          <span>پیام‌ها</span>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
            4
          </span>
        </button>

        {/* تیکت‌ها */}
        <button
          className="flex items-center cursor-pointer gap-2 text-sm focus:outline-none hover:text-blue-400 transition-colors duration-300"
        >
          <i className="fas fa-paper-plane"></i>
          <span>تیکت‌ها</span>
        </button>

        {/* دکمه بورگر فقط در موبایل/تبلت */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          aria-label="باز کردن منو"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
