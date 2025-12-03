import React, { useState } from "react";
import ModalsContainer from "../../components/ModalsContiener";

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* دکمه باز کردن مودال */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 flex items-center justify-center"
      >
        <i className="fas fa-plus"></i>
      </button>

      {/* مودال */}
      <ModalsContainer
        title="افزودن کاربر"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fullScreen={false}
      >
        <div className="p-4 space-y-4 overflow-y-auto max-h-screen">
          {/* نام */}
          <div className="flex flex-col ">
            <label className="mb-1 text-sm font-medium">نام</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="فقط از حروف استفاده شود"
            />
          </div>

          {/* نام خانوادگی */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">نام خانوادگی</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="فقط از حروف استفاده شود"
            />
          </div>

          {/* کد ملی */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">کد ملی</label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="فقط عدد"
            />
          </div>

          {/* موبایل */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">شماره موبایل</label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="فقط عدد"
            />
          </div>

          {/* ایمیل */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">ایمیل</label>
            <input
              type="email"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="email@yourhost.com"
            />
          </div>

          {/* رمز عبور */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">رمز عبور</label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="حداقل 8 کاراکتر"
            />
          </div>

          {/* جنسیت */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">جنسیت</label>
            <select className="border rounded-lg px-3 py-2">
              <option value="male">مرد</option>
              <option value="female">زن</option>
              <option value="unknown">نامشخص</option>
            </select>
          </div>

          {/* آدرس */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">آدرس</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2"
              placeholder="خیابان - کوچه و ..."
            />
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">اینستاگرام</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2"
              placeholder="@username"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">تلگرام</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2"
              placeholder="@username"
            />
          </div>
          
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddUser;
