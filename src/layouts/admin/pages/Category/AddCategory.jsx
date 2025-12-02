const Addcategory = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          id="add_product_category_modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          aria-hidden="true"
        >
          {/* جعبه مودال */}
          <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
            {/* هدر مودال */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h5 className="text-lg font-bold">افزودن دسته محصولات</h5>
              <button
                type="button"
                onClick={onClose}
                className="text-red-500 hover:text-red-600 cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            {/* بدنه مودال */}
            <div className="px-6 py-4 space-y-4">
              {/* دسته والد */}
              <div className="flex items-center gap-2">
                <select className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300">
                  <option value="1">بدون والد</option>
                  <option value="2">دسته شماره 1</option>
                </select>
                <span className="w-24 text-center text-sm font-medium text-gray-600">
                  دسته والد
                </span>
              </div>

              {/* عنوان دسته */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="عنوان دسته"
                  className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                />
                <span className="w-24 text-center text-sm font-medium text-gray-600">
                  عنوان
                </span>
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

              {/* وضعیت فعال */}
              <div className="flex items-center justify-center">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="toggle-checkbox cursor-pointer accent-indigo-600"
                  />
                  <span className="text-sm font-medium">وضعیت فعال</span>
                </label>
              </div>

              {/* دکمه ذخیره */}
              <div className="text-center mt-4">
                <button className="px-6 py-2 bg-green-600 cursor-pointer text-white rounded-lg hover:bg-green-700 transition-colors">
                  ذخیره
                </button>
              </div>
            </div>

            {/* فوتر مودال */}
            <div className="flex justify-end gap-2 px-6 py-4 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2  bg-red-500 cursor-pointer text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Addcategory;
