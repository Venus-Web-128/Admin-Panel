const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="fixed top-0 right-0 left-0 h-16 bg-gray-800 text-white flex items-center justify-between px-4">
      {/* سمت چپ خالی */}
      <div></div>

      {/* سمت راست: پیام‌ها، تیکت‌ها، دکمه بورگر */}
      <div className="flex items-center gap-6">
        {/* پیام‌ها */}
        <button className="relative flex items-center cursor-pointer gap-2 text-sm focus:outline-none hover:text-blue-400 transition-colors duration-300">
          <i className="fas fa-envelope"></i>
          <span>پیام‌ها</span>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
            4
          </span>
        </button>

        {/* تیکت‌ها */}
        <button className="relative flex items-center cursor-pointer gap-2 text-sm focus:outline-none hover:text-blue-400 transition-colors duration-300">
          <i className="fas fa-paper-plane"></i>
          <span>تیکت‌ها</span>
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-1">
            2
          </span>
        </button>

        {/* دکمه بورگر */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 absolute right-0 focus:outline-none cursor-pointer hover:text-blue-400 transition-colors duration-300 md:hidden"
        >
          <i className="fas fa-bars text-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
