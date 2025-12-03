import React, { useState } from "react";
import ModalsContainer from "../../components/ModalsContiener";

const AddDiscount = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
        title="افزودن کد تخفیف"
        isOpen={isOpen}
        onClose={handleClose}
        fullScreen={false}
      >
        <div className="p-4 space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">عنوان کد</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="کیبرد را در حالت فارسی قرار دهید"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">کد تخفیف</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="کیبرد را در حالت لاتین قرار دهید"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">درصد تخفیف</label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="فقط عدد"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">تاریخ اعتبار</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="مثلا 1400/10/10"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">برای</label>
            <input
              type="text"
              list="brandLists"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="قسمتی از نام محصول را وارد کنید"
            />
            <datalist id="brandLists">
              <option value="محصول شماره 1" />
              <option value="محصول شماره 2" />
              <option value="محصول شماره 3" />
            </datalist>
          </div>

          <div className="flex space-x-2">
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
              <i className="fas fa-times text-red-500 mr-1"></i> محصول 1
            </span>
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
              <i className="fas fa-times text-red-500 mr-1"></i> محصول 2
            </span>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddDiscount;
