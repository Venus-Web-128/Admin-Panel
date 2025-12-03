// pages/colors/AddColor.jsx
import { useState } from "react";
import ModalsContainer from "../../components/ModalsContiener";

const AddColor = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 flex items-center justify-center"
        onClick={() => setOpen(true)}
      >
        <i className="fas fa-plus" />
      </button>

      <ModalsContainer
        id="add_color_modal"
        title="افزودن رنگ جدید"
        fullScreen={false}
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <div className="space-y-4">
          <div className="flex items-center border rounded-lg shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="نام رنگ را وارد کنید"
              className="grow px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span className="bg-gray-200 px-4 py-2 text-sm font-medium">
              نام رنگ
            </span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="exampleColorInput" className="mb-1 text-sm font-medium">
              انتخاب رنگ
            </label>
            <input
              type="color"
              id="exampleColorInput"
              defaultValue="#563d7c"
              className="w-16 h-10 border rounded cursor-pointer"
            />
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};

export default AddColor;
