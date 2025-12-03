import React, { useState } from "react";
import ModalsContainer from "../../components/ModalsContiener";

const AddRole = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    // اینجا منطق ذخیره نقش رو می‌ذاری
    console.log("Role saved!");
    setIsOpen(false);
  };

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
        title="افزودن نقش کاربر"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fullScreen={false}
      >
        <div className="p-4 space-y-4 overflow-y-auto max-h-screen">
          {/* عنوان نقش */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">عنوان نقش</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="عنوان نقش"
            />
          </div>

          {/* توضیحات نقش */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">توضیحات نقش</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="توضیحات نقش"
            />
          </div>

          {/* دسترسی‌ها */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">دسترسی‌ها</label>
            <input
              type="text"
              list="permissionsList"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="قسمتی از مجوز مورد نظر را وارد کنید"
            />
            <datalist id="permissionsList">
              <option value="مجوز شماره 1" />
              <option value="مجوز شماره 2" />
              <option value="مجوز شماره 3" />
            </datalist>

            <div className="flex gap-2 mt-2">
              <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
                <i className="fas fa-times text-red-500 mr-1"></i> مجوز 1
              </span>
              <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
                <i className="fas fa-times text-red-500 mr-1"></i> مجوز 2
              </span>
            </div>
          </div>

          {/* وضعیت */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="roleStatus"
              className="form-checkbox h-5 w-5 text-indigo-600"
              defaultChecked
            />
            <label htmlFor="roleStatus" className="cursor-pointer">
              وضعیت: فعال
            </label>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddRole;
