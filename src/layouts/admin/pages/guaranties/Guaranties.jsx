import React from 'react';
import AddGuaranty from './AddGuaranty';
import GuarantiesTable from './GuarantiesTable';

const Guaranties = () => {
  return (
    <div id="manage_guarantee_section" className="main_section p-4">
      <h4 className="text-center my-3">مدیریت گارانتی‌ها</h4>

      <div className="flex justify-between flex-wrap mb-6">
        {/* بخش جستجو */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="flex border rounded overflow-hidden">
            <input
              type="text"
              className="grow px-3 py-2 focus:outline-none"
              placeholder="قسمتی از عنوان را وارد کنید"
            />
            <span className="bg-gray-200 px-4 py-2">جستجو</span>
          </div>
        </div>

        {/* دکمه افزودن گارانتی */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex justify-end mt-3 md:mt-0">
          <AddGuaranty />
        </div>
      </div>

      {/* جدول گارانتی‌ها */}
      <GuarantiesTable />
    </div>
  );
};

export default Guaranties;
