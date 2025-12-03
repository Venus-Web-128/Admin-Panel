import React, { useState } from 'react';
import ModalsContainer from '../../components/ModalsContiener';

const AddGuaranty = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* دکمه باز کردن مودال */}
      <button
        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 flex items-center justify-center"
        onClick={() => setOpen(true)}   // ✅ باز کردن مودال با state
      >
        <i className="fas fa-plus"></i>
      </button>

      {/* مودال */}
      <ModalsContainer
        id="add_guarantee_modal"
        title="افزودن گارانتی"
        fullScreen={false}
        isOpen={open}                  // ✅ کنترل نمایش
        onClose={() => setOpen(false)} // ✅ بستن مودال
      >
        <div className="space-y-4">
          {/* عنوان گارانتی */}
          <div className="flex items-center border rounded-lg shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="عنوان گارانتی"
              className="grow px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="bg-gray-200 px-4 py-2 text-sm font-medium">
              عنوان گارانتی
            </span>
          </div>

          {/* توضیحات گارانتی */}
          <div className="flex items-center border rounded-lg shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="توضیحات گارانتی"
              className="grow px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="bg-gray-200 px-4 py-2 text-sm font-medium">
              توضیحات
            </span>
          </div>

          {/* مدت گارانتی */}
          <div className="flex items-center border rounded-lg shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="مدت به ماه"
              className="grow px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="bg-gray-200 px-4 py-2 text-sm font-medium">
              مدت
            </span>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddGuaranty;
