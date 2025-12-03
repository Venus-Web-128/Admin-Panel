import React, { useState } from "react";
import ModalsContainer from "../../components/ModalsContiener";

const AddComment = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSave = () => {
        // اینجا منطق ذخیره نظر رو می‌ذاری
        console.log("Comment saved!");
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
                title="افزودن نظر برای محصول"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                fullScreen={false}
            >
                <div className="p-4 space-y-4 overflow-y-auto max-h-screen">
                    {/* متن نظر */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">متن نظر</label>
                        <textarea
                            rows="5"
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                        ></textarea>
                    </div>

                    {/* انتخاب محصول */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">برای محصول</label>
                        <input
                            type="text"
                            list="productList"
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="قسمتی از نام محصول مورد نظر را وارد کنید"
                        />
                        <datalist id="productList">
                            <option value="محصول شماره 1" />
                            <option value="محصول شماره 2" />
                            <option value="محصول شماره 3" />
                        </datalist>
                    </div>
                </div>
            </ModalsContainer>
        </>
    );
};

export default AddComment;
