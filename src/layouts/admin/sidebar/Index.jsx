import React from "react";
import SidebarItem from "./SidebarItem";
import SidebarGroup from "./SidebarGroup";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside
      className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
      ${sidebarOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
    >
      <ul className="list-none p-0 m-0">
        {/* پروفایل */}
        <li className="flex flex-col items-center py-4">
          <img
            src="/assets/images/avatar/user2.jpg"
            className="w-20 h-20 rounded-full object-cover ring-2  ring-gray-700"
            alt="پروفایل"
          />
          <div className="mt-2 text-sm text-gray-200">***</div>
        </li>

        {/* آیتم‌ها */}
        
          <SidebarItem icon="fas fa-shopping-basket" label="مدیریت سبدها" />
          <SidebarItem icon="fas fa-cube" label="مدیریت محصولات" />
          <SidebarItem icon="fas fa-users" label="مدیریت کاربران" />
          <SidebarItem icon="fas fa-truck" label="مدیریت ارسال" />
          <SidebarItem icon="fas fa-copyright" label="مدیریت برندها" />
          <SidebarItem icon="fas fa-palette" label="مدیریت رنگ‌ها" />
          <SidebarItem icon="fas fa-percentage" label="مدیریت تخفیف‌ها" />
          <SidebarItem icon="fas fa-power-off" label="خروج" />
        </ul>

    </aside>
  );
};

export default Sidebar;
