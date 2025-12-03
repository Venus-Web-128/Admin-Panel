import React from "react";
import AddBrands from "./AddBrands";
import Brandstable from "./BrandsTable";

const Brands = () => {
    return (
        <div id="manage_brand_section" className="main_section px-4 py-6">
            <h4 className="text-center my-3 text-xl font-bold">مدیریت برند ها</h4>

            <div className="flex flex-wrap justify-between items-center mb-6">
                {/* بخش جستجو */}
                <div className="flex items-center border rounded-lg shadow-md overflow-hidden">
                    <input
                        type="text"
                        placeholder="قسمتی از عنوان را وارد کنید"
                        className="grow px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                    <span className="bg-gray-200 px-4 py-2 text-sm font-medium">
                        جستجو
                    </span>
                </div>

                {/* دکمه افزودن برند */}
                <div className="w-full md:w-auto flex justify-end">
                    <AddBrands />
                </div>
            </div>

            {/* جدول برندها */}
            <Brandstable />
        </div>
    );
};

export default Brands;
