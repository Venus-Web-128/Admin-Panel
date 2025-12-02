import React from "react";

const AddProduct = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    
    
    <div className="fixed inset-0 z-50 pt-20 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        {/* هدر */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h5 className="text-lg font-bold">افزودن محصول جدید</h5>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-600 cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* بدنه */}
        <div className="px-6 py-4 space-y-4">
          {/* دسته */}
          <div className="flex items-center gap-2">
            <select className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300">
              <option>انتخاب دسته محصول</option>
              <option>دسته شماره 1</option>
            </select>
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              دسته
            </span>
          </div>

          {/* عنوان */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="عنوان محصول"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              عنوان
            </span>
          </div>

          {/* قیمت */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="قیمت محصول"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              قیمت
            </span>
          </div>

          {/* وزن */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="وزن محصول (کیلوگرم)"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              وزن
            </span>
          </div>

          {/* برند */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="قسمتی از نام برند را وارد کنید"
              list="brandLists"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              برند
            </span>
            <datalist id="brandLists">
              <option value="سامسونگ" />
              <option value="سونی" />
              <option value="اپل" />
            </datalist>
          </div>

          {/* رنگ */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="قسمتی از نام رنگ را وارد کنید"
              list="colorList"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              رنگ
            </span>
            <datalist id="colorList">
              <option value="مشکی" />
              <option value="سفید" />
              <option value="قرمز" />
            </datalist>
          </div>

          {/* گارانتی */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="قسمتی از نام گارانتی را وارد کنید"
              list="guarantiList"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              گارانتی
            </span>
            <datalist id="guarantiList">
              <option value="گارانتی فلان 1" />
              <option value="گارانتی فلان 2" />
              <option value="گارانتی فلان 3" />
            </datalist>
          </div>

          {/* توضیحات */}
          <div className="flex items-center gap-2">
            <textarea
              rows="5"
              placeholder="توضیحات"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            ></textarea>
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              توضیحات
            </span>
          </div>

          {/* تصویر */}
          <div className="flex items-center gap-2">
            <input
              type="file"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              تصویر
            </span>
          </div>

          {/* توضیح تصویر */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="یک کلمه در مورد تصویر"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              توضیح تصویر
            </span>
          </div>

          {/* تگ‌ها */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="با - از هم جدا شوند"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              تگ‌ها
            </span>
          </div>

          {/* موجودی */}
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="فقط عدد"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              موجودی
            </span>
          </div>

          {/* درصد تخفیف */}
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="فقط عدد"
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="w-24 text-center text-sm font-medium text-gray-600">
              درصد تخفیف
            </span>
          </div>

          {/* وضعیت فعال */}
          <div className="flex items-center justify-center gap-2">
            <input
              type="checkbox"
              id="activeStatus"
              className="w-5 h-5 cursor-pointer accent-indigo-600 transition duration-300"
            />
            <label htmlFor="activeStatus" className="text-sm font-medium">
              وضعیت فعال
            </label>
          </div>

          {/* دکمه‌ها */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-white bg-red-500 cursor-pointer rounded-lg hover:bg-red-600 transition-colors"
            >
              انصراف
            </button>
            <button className="px-6 py-2  bg-green-600 cursor-pointer text-white rounded-lg hover:bg-green-700 transition-colors">
              ذخیره
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
