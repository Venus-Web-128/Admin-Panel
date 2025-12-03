import React, { useState } from "react";
import ModalsContainer from "../../components/ModalsContiener"; 

const AddBrands = () => {
  const [isOpen, setIsOpen] = useState(false);

  // هندلرهای ذخیره و بستن
  const handleClose = () => setIsOpen(false);
  const handleSave = () => {
    console.log("برند ذخیره شد");
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
        title="افزودن برند"
        isOpen={isOpen}
        onClose={handleClose}
        onSave={handleSave}
      >
        {/* فرم داخل مودال */}
        <div className="space-y-4">
          {/* عنوان فارسی برند */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">عنوان فارسی برند</label>
            <input
              type="text"
              placeholder="کیبرد را در حالت فارسی قرار دهید"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* توضیحات برند */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">توضیحات برند</label>
            <input
              type="text"
              placeholder="متن کوتاه در مورد برند"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* تصویر */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">تصویر</label>
            <input
              type="file"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* توضیح تصویر */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">توضیح تصویر</label>
            <input
              type="text"
              placeholder="یک کلمه در مورد تصویر"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddBrands;
