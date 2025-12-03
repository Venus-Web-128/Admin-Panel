import React, { useState } from "react";
import ModalsContainer from "../../components/ModalsContiener";

const AddDelivery = () => {
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
        title="افزودن روش ارسال"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fullScreen={false}
      >
        <div className="p-4 space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">عنوان</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="عنوان روش ارسال"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">هزینه</label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="تومان (فقط عدد)"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">مدت ارسال</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="فقط عدد"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">واحد مدت ارسال</label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="روز / ساعت"
            />
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddDelivery;
