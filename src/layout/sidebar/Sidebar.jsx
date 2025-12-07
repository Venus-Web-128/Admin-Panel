import React from "react";
import SidebarItem from "./SidebarItem";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";


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
        <SidebarItem targetPath="/brands" icon="fas fa-copyright" label="مدیریت برندها" />
        <SidebarItem targetPath="/colors" icon="fas fa-palette" label="مدیریت رنگ‌ها" />
        <SidebarItem targetPath="/guaranties" icon="fas fa-palette" label="مدیریت گارانتی ها" />
        <SidebarItem targetPath="/discounts" icon="fas fa-percent" label="مدیریت تخفیف‌ها" />

        <div className="text-blue-500 text-center mt-4">سفارشات و سبد</div>
        <SidebarItem targetPath="/carts" icon="fas fa-shopping-basket" label="مدیریت سبدها" />
        <SidebarItem targetPath="/orders" icon="fas fa-receipt" label="مدیریت سفارشات" />
        <SidebarItem targetPath="/deliveries" icon="fas fa-truck" label="مدیریت نحوه ارسال" />

        <div className="text-blue-500 text-center mt-4">کاربران و همکاران</div>
        <SidebarItem targetPath="/users" icon="fas fa-users" label="مشاهده کاربران" />
        <SidebarItem targetPath="/roles" icon="fas fa-user-tag" label="نقش‌ها" />
        <SidebarItem targetPath="/permissions" icon="fas fa-user-shield" label="مجوزها" />

        <div className="text-blue-500 text-center mt-4">ارتباطات</div>
        <SidebarItem targetPath="/questions" icon="fas fa-question-circle" label="سوال‌ها" />
        <SidebarItem targetPath="/comments" icon="fas fa-comments" label="نظرات" />

        <br></br>

        <Link
          to="/logout"
          className="flex items-center mr-4 gap-2 hover:text-red-500 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faPowerOff} />
          <span>خروج</span>
        </Link>

        <br></br>

      </ul>
    </aside>
  );
};

export default Sidebar;
