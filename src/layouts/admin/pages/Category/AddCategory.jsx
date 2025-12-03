import ModalsContainer from "../../components/ModalsContiener";

const Addcategory = ({ isOpen, onClose, onSave }) => {
  return (
    <ModalsContainer
      title="افزودن دسته محصولات"
      isOpen={isOpen}
      onClose={onClose}
      onSave={onSave}
    >
      {/* فقط فرم داخل مودال */}
      <div className="px-6 py-4 space-y-4">
        <div className="flex items-center gap-2">
          <select className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300">
            <option value="1">بدون والد</option>
            <option value="2">دسته شماره 1</option>
          </select>
          <span className="w-24 text-center text-sm font-medium text-gray-600">
            دسته والد
          </span>
        </div>

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

        <div className="flex items-center gap-2">
          <input
            type="file"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <span className="w-24 text-center text-sm font-medium text-gray-600">
            تصویر
          </span>
        </div>

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
      </div>
    </ModalsContainer>
  );
};

export default Addcategory;
