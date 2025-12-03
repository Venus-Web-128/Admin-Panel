import React, { useState } from "react";
import ModalsContainer from "../../components/ModalsContiener";

const AddQuestion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    // اینجا منطق ذخیره سوال رو می‌ذاری
    console.log("Question saved!");
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
        title="افزودن سوال"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fullScreen={false}
      >
        <div className="p-4 space-y-4 overflow-y-auto max-h-screen">
          {/* نوع سوال */}
          <div className="flex items-center gap-4 justify-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              سوال
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              پاسخ
            </label>
          </div>

          {/* متن سوال */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">متن سوال</label>
            <textarea
              rows="5"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            ></textarea>
          </div>

          {/* گروه سوال */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">گروه</label>
            <input
              type="text"
              list="questionGroupList"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="قسمتی از نام گروه را وارد کنید"
            />
            <datalist id="questionGroupList">
              <option value="گروه 1" />
              <option value="گروه 2" />
              <option value="گروه 3" />
            </datalist>
          </div>

          {/* انتخاب سوال مرتبط */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">انتخاب سوال</label>
            <input
              type="text"
              list="questionsList"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="آی دی سوال مورد نظر را وارد کنید"
            />
            <datalist id="questionsList">
              <option value="سوال شماره 1" />
              <option value="سوال شماره 2" />
              <option value="سوال شماره 3" />
            </datalist>
          </div>

          
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddQuestion;
