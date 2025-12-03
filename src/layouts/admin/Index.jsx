// src/pages/Index.jsx
import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Category from "./pages/Category/Category";
import Product from "./pages/product/Product";
import { Route, Routes } from "react-router-dom";
import Addcategory from "./pages/Category/AddCategory";
import Brands from "./pages/brands/Brands";
import Colors from "./pages/colors/Colors";
import Guaranties from "./pages/guaranties/Guaranties";

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
          className="flex-1 transition-all duration-300 p-4 md:p-6 lg:p-8 pt-16 relative z-20">
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/categories" element={<Category />}/>
              <Route path="/add-category" element={<Addcategory />} />
              <Route path="/products" element={<Product />}/>
              <Route path="/brands" element={<Brands/>} />
              <Route path="/colors" element={<Colors/>} />
              <Route path="/guaranties" element={<Guaranties/>} />

              <Route path="*" element={<Dashboard/>} />
            </Routes>
        </section>
      </div>
    </div>
  );
};

export default Index;
