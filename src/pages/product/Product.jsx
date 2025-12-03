import { useState } from "react";
import AddProduct from "./AddProduct";
import ProductTable from "./ProductTable";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      id="manage_product_section"
      className="main_section px-4 py-6"
    >
      <h4 className="text-center my-3 text-xl font-bold">
        مدیریت محصولات
      </h4>

      {/* بخش جستجو و دکمه افزودن */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        {/* جستجو */}
        <div className="flex-1 max-w-md">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="قسمتی از عنوان را وارد کنید"
              className="flex-1 px-3 py-2 focus:outline-none"
            />
            <span className="px-3 cursor-pointer border-2 py-1 pb-2 rounded-xl ml-1 bg-blue-500 hover:bg-blue-600  transition duration-200 text-white text-sm">
              جستجو
            </span>
          </div>
        </div>

        {/* دکمه افزودن */}
        <div className="flex">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 cursor-pointer hover:bg-green-700 duration-300 text-white rounded-full p-3 flex items-center justify-center transition-colors"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>

      {/* جدول محصولات */}
      <ProductTable />

      {/* مودال افزودن محصول */}
      <AddProduct isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Product;
