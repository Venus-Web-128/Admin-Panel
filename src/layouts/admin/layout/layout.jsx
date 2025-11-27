import React, { useState } from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";

const Layout = () => {
    // اینجا state رو تعریف می‌کنیم
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div dir="rtl" className="min-h-screen bg-gray-100 text-gray-900">
            {/* Navbar دکمه بورگر داره و state رو تغییر می‌ده */}
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="pt-16 flex">
                {/* سایدبار state رو می‌گیره */}
                <Sidebar sidebarOpen={sidebarOpen} />
                <main className="flex-1 p-4 md:p-6">
                    {/* محتوای اصلی */}
                </main>
            </div>
        </div>
    );
};

export default Layout;

