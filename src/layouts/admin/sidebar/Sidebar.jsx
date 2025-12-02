import React from "react";
import SidebarItem from "./SidebarItem";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Avatar from "./Avatar";


const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside
      className={`fixed top-16 right-0 w-64 bg-gray-900 scrollbar-hide text-white transform transition-transform duration-300 ease-in-out z-40
  ${sidebarOpen ? "translate-x-0" : "translate-x-full"} h-[calc(100vh-4rem)] overflow-y-auto`}
    >
      <ul className="list-none p-0 m-0">
        {/* پروفایل */}
        <Avatar name="***" imagePath="./assets/image/avatar/user2.jpg" />

        {/* آیتم‌ها */}
        <SidebarItem targetPath="/" icon="fas fa-layer-group" label="داشبورد" />
        <div className="text-blue-500 text-center">فروشگاه</div>
        <SidebarItem targetPath="/categories" icon="fas fa-layer-group" label="مدیریت گروه محصولات" />
        <SidebarItem targetPath="/products" icon="fas fa-box-open" label="مدیریت محصولات" />
        <SidebarItem targetPath="/test" icon="fas fa-copyright" label="مدیریت برندها" />
        <SidebarItem targetPath="/test" icon="fas fa-palette" label="مدیریت رنگ‌ها" />
        <SidebarItem targetPath="/test" icon="fas fa-percent" label="مدیریت تخفیف‌ها" />

        <div className="text-blue-500 text-center mt-4">سفارشات و سبد</div>
        <SidebarItem targetPath="/test" icon="fas fa-shopping-basket" label="مدیریت سبدها" />
        <SidebarItem targetPath="/test" icon="fas fa-receipt" label="مدیریت سفارشات" />
        <SidebarItem targetPath="/test" icon="fas fa-truck" label="مدیریت نحوه ارسال" />

        <div className="text-blue-500 text-center mt-4">کاربران و همکاران</div>
        <SidebarItem targetPath="/test" icon="fas fa-users" label="مشاهده کاربران" />
        <SidebarItem targetPath="/test" icon="fas fa-user-tag" label="نقش‌ها" />
        <SidebarItem targetPath="/test" icon="fas fa-user-shield" label="مجوزها" />

        <div className="text-blue-500 text-center mt-4">ارتباطات</div>
        <SidebarItem targetPath="/test" icon="fas fa-question-circle" label="سوال‌ها" />
        <SidebarItem targetPath="/test" icon="fas fa-comments" label="نظرات" />


        <SidebarItem targetPath="/test" icon="fas fa-power-off" label="خروج" className="hover:text-red-500 transition-colors duration-200" />

      </ul>
    </aside>
  );
};

export default Sidebar;
