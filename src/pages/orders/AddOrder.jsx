import React, { useState } from "react";
import ModalsContainer from "../../components/ModalsContiener";

const AddOrder = () => {
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
        title="افزودن سفارش"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fullScreen={true}
      >
        <div className="p-4 space-y-4">
          {/* فرم سفارش */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <input
              type="text"
              list="cart_list_select"
              placeholder="انتخاب سبد"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <datalist id="cart_list_select">
              <option value="46 - سبد شماره 1" />
              <option value="58 - سبد شماره 2" />
            </datalist>

            <input
              type="text"
              placeholder="تاریخ پرداخت"
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              value="پرداخت : 500,000 تومان"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              value="تخفیف : 5,000 تومان"
              disabled
              className="border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              placeholder="کد تخفیف"
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <input
            type="text"
            placeholder="آدرس کامل"
            className="border rounded-lg px-3 py-2 w-full"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <select className="border rounded-lg px-3 py-2">
              <option value="">نوع ارسال</option>
              <option value="1">پیشتاز</option>
              <option value="2">معمولی</option>
            </select>
            <input
              type="text"
              placeholder="تلفن"
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="ایمیل"
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="شماره کارت"
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="نام بانک"
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <hr />

          {/* محصولات داخل سفارش */}
          <div className="space-y-2 dir_ltr">
            <div className="flex items-center border rounded-lg p-2">
              <span className="bg-gray-200 px-3 py-1 rounded-l">عدد</span>
              <input
                type="number"
                value="50"
                disabled
                className="border px-3 py-1 text-center w-20 bg-gray-100"
              />
              <span className="flex-1 bg-gray-100 px-3 py-1 rounded-r text-sm">
                محصول شماره 1 (100هزار تومان) (گارانتی فلان)
                <i className="fas fa-circle mx-1 text-black"></i>
              </span>
            </div>

            <div className="flex items-center border rounded-lg p-2">
              <span className="bg-gray-200 px-3 py-1 rounded-l">عدد</span>
              <input
                type="number"
                value="5"
                disabled
                className="border px-3 py-1 text-center w-20 bg-gray-100"
              />
              <span className="flex-1 bg-gray-100 px-3 py-1 rounded-r text-sm">
                محصول ویژه شماره 2 (100هزار تومان) (گارانتی فلان)
                <i className="fas fa-circle mx-1" style={{ color: "rgb(236,16,16)" }}></i>
              </span>
            </div>
          </div>

          {/* دکمه ذخیره */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
            >
              ذخیره
            </button>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddOrder;
