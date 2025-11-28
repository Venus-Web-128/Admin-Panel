import React from "react";
import SidebarItem from "./SidebarItem";
import SidebarGroup from "./SidebarGroup";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Avatar from "./Avatar";


const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside
      className={`fixed top-16 overflow-y-auto scrollbar-hide right-0 h-[calc(100vh-4rem)] w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
  ${sidebarOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0 overflow-y-auto`}
    >
      <ul className="list-none p-0 m-0">
        {/* پروفایل */}
        <Avatar name="***" imagePath="./assets/image/avatar/user2.jpg" />

        {/* آیتم‌ها */}
        <div className="text-white text-center">فروشگاه</div>
        <SidebarItem icon="fas fa-layer-group" label="مدیریت گروه محصول" />
        <SidebarItem icon="fas fa-box-open" label="مدیریت محصول" />
        <SidebarItem icon="fas fa-copyright" label="مدیریت برندها" />
        <SidebarItem icon="fas fa-palette" label="مدیریت رنگ‌ها" />
        <SidebarItem icon="fas fa-percent" label="مدیریت تخفیف‌ها" />

        <div className="text-white text-center mt-4">سفارشات و سبد</div>
        <SidebarItem icon="fas fa-shopping-basket" label="مدیریت سبدها" />
        <SidebarItem icon="fas fa-receipt" label="مدیریت سفارشات" />
        <SidebarItem icon="fas fa-truck" label="مدیریت نحوه ارسال" />

        <div className="text-white text-center mt-4">کاربران و همکاران</div>
        <SidebarItem icon="fas fa-users" label="مشاهده کاربران" />
        <SidebarItem icon="fas fa-user-tag" label="نقش‌ها" />
        <SidebarItem icon="fas fa-user-shield" label="مجوزها" />

        <div className="text-white text-center mt-4">ارتباطات</div>
        <SidebarItem icon="fas fa-question-circle" label="سوال‌ها" />
        <SidebarItem icon="fas fa-comments" label="نظرات" />


        <SidebarItem icon="fas fa-power-off" label="خروج" className="hover:text-red-500 transition-colors duration-200" />

      </ul>
    </aside>
  );
};

export default Sidebar;
