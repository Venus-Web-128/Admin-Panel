import React, { useState } from "react";
import ModalsContainer from "../../components/ModalsContiener";

 const AddCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      {/* دکمه باز کردن مودال */}
      <button
        onClick={handleOpen}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 flex items-center justify-center"
      >
        <i className="fas fa-plus"></i>
      </button>

      {/* مودال */}
      <ModalsContainer
        title="جزئیات و افزودن سبد خرید"
        isOpen={isOpen}
        onClose={handleClose}
        fullScreen={true}
      >
        <div className="p-4 space-y-6">
          {/* بخش انتخاب مشتری و محصول */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <input
              type="text"
              list="customer_list"
              placeholder="نام مشتری"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <datalist id="customer_list">
              <option value="مشتری شماره 1" />
              <option value="مشتری شماره 2" />
            </datalist>

            <input
              type="text"
              list="product_list"
              placeholder="عنوان محصول"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <datalist id="product_list">
              <option value="محصول شماره 1" />
              <option value="محصول شماره 2" />
            </datalist>

            <select className="border rounded-lg px-3 py-2">
              <option value="">انتخاب رنگ</option>
              <option value="1">رنگ شماره 1</option>
              <option value="2">رنگ شماره 2</option>
            </select>

            <select className="border rounded-lg px-3 py-2">
              <option value="">انتخاب گارانتی</option>
              <option value="1">گارانتی شماره 1</option>
              <option value="2">گارانتی شماره 2</option>
            </select>

            <input
              type="number"
              placeholder="تعداد"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* ثبت ویژگی */}
          <div className="flex justify-center">
            <i
              className="fas fa-check text-white bg-green-600 rounded-full p-2 cursor-pointer"
              title="ثبت ویژگی"
            ></i>
          </div>

          <hr />

          {/* لیست محصولات داخل سبد */}
          <div className="space-y-4">
            <div className="flex items-center border rounded-lg p-2 dir_ltr">
              <span className="bg-gray-200 px-3 py-1 rounded-l">عدد</span>
              <input
                type="number"
                value="50"
                className="border px-3 py-1 text-center w-20"
              />
              <span className="flex-1 bg-gray-100 px-3 py-1 rounded-r flex items-center justify-between text-sm">
                <span>
                  محصول شماره 1 (100هزار تومان) (گارانتی فلان)
                </span>
                <i
                  className="fas fa-times text-red-500 cursor-pointer ml-2"
                  title="حذف محصول از سبد"
                ></i>
              </span>
            </div>

            <div className="flex items-center border rounded-lg p-2 dir_ltr">
              <span className="bg-gray-200 px-3 py-1 rounded-l">عدد</span>
              <input
                type="number"
                value="5"
                className="border px-3 py-1 text-center w-20"
              />
              <span className="flex-1 bg-gray-100 px-3 py-1 rounded-r flex items-center justify-between text-sm">
                <span>
                  محصول ویژه شماره 2 (100هزار تومان) (گارانتی فلان)
                </span>
                <i
                  className="fas fa-times text-red-500 cursor-pointer ml-2"
                  title="حذف محصول از سبد"
                ></i>
              </span>
            </div>
          </div>

          {/* جمع کل */}
          <div className="flex justify-center border rounded-lg p-2 dir_ltr">
            <span className="flex-1 bg-gray-200 px-3 py-1 text-center">
              200,000 تومان
            </span>
            <span className="w-1/3 bg-gray-100 px-3 py-1 text-center">
              جمع کل
            </span>
          </div>

        
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddCart;
