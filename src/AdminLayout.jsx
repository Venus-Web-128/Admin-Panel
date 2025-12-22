import { useState } from "react";
import Navbar from "./layout/navbar/Navbar";
import Sidebar from "./layout/sidebar/Sidebar";
import Category from "./pages/Category/Category";
import Product from "./pages/product/Product";
import { Route, Routes, Navigate } from "react-router-dom";
import Addcategory from "./pages/Category/AddCategory";
import Brands from "./pages/brands/Brands";
import Colors from "./pages/colors/Colors";
import Guaranties from "./pages/guaranties/Guaranties";
import Discounts from "./pages/discounts/Discounts";
import Carts from "./pages/carts/Carts";
import Orders from "./pages/orders/Orders";
import Deliveries from "./pages/deliveries/Deliveries";
import Users from "./pages/users/Users";
import Roles from "./pages/roles/Roles";
import Permissions from "./pages/permissions/Permissions";
import Questions from "./pages/questions/Questions";
import Comments from "./pages/comments/Comments";
import Dashboard from "./pages/dashboard/Dashboard";
import { useIsLogin } from "../src/hooks/authHook";
import Logout from "./pages/auth/Logout";
import CategoryChildren from "./pages/Category/categoryChildren";
import Attributes from "./pages/Category/attrs/Attributes";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { loading, isLogin } = useIsLogin();

  if (loading) {
    return <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>;
  }

  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100" dir="rtl">
      {/* نوبار */}
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex relative">
        {/* Overlay وقتی سایدبار بازه */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* سایدبار */}
        <Sidebar sidebarOpen={sidebarOpen} />

        {/* محتوای اصلی */}
        <section
          id="content_section"
          className="flex-1 transition-all duration-300 p-4 md:p-6 lg:p-8 pt-16 relative z-20"
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Category />} >
              <Route path=":categoryId" element={<CategoryChildren />} />
            </Route>
            <Route path="/add-category" element={<Addcategory />} />
            <Route path="/categories/:categoriesId/attributes" element={<Attributes />} />
            <Route path="/products" element={<Product />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/guaranties" element={<Guaranties />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/deliveries" element={<Deliveries />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/permissions" element={<Permissions />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Index;
