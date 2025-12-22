import { useState } from "react";
import AddCategory from "./AddCategory";
import CategoryTable from "./CategoryTable";
import CategoryContextContainer from "../../Contexts/CategoryContext"

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CategoryContextContainer>
      <div id="manage_product_category" className="main_section px-4 py-6 pt-6">
        <h4 className="text-center my-3 text-xl font-bold">
          مدیریت دسته بندی محصولات
        </h4>

        {/* جدول دسته‌ها */}
        <CategoryTable setIsModalOpen={setIsModalOpen} />

        {/* مودال افزودن دسته */}
        <AddCategory isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </CategoryContextContainer>
  );
};

export default Category;
