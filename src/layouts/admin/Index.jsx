// src/pages/Index.jsx
import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Category from "./pages/Category/Category";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100" dir="rtl">
      {/* نوبار با دکمه بورگر همیشه فعال */}
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex relative">
        {/* Overlay وقتی سایدبار بازه (همه حالت‌ها) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* سایدبار فقط با state کنترل میشه */}
        <Sidebar sidebarOpen={sidebarOpen} />

        {/* محتوای اصلی */}
        <section
          id="content_section"
          className="flex-1 transition-all duration-300 p-4 md:p-6 lg:p-8 pt-16 relative z-20"
        >
          {/* <Dashboard /> */}
          <Category />
        </section>
      </div>
    </div>
  );
};

export default Index;
