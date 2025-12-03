import React, { useState } from 'react';
import AddDiscount from './AddDiscount';
import DiscountsTable from './DiscountsTable';

const Discounts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div id="manage_discount_section" className="main_section p-4">
      <h4 className="text-center my-3 text-xl font-bold">مدیریت کدهای تخفیف</h4>

      {/* بخش جستجو و افزودن */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* جستجو */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-3 md:mb-0">
          <div className="flex dir_ltr">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="قسمتی از عنوان را وارد کنید"
            />
            <span className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg">
              جستجو
            </span>
          </div>
        </div>

        {/* افزودن تخفیف */}
        <div className="flex justify-end w-full md:w-auto">
          <AddDiscount />
        </div>
      </div>

      {/* جدول تخفیف‌ها */}
      <DiscountsTable searchTerm={searchTerm} />
    </div>
  );
};

export default Discounts;
