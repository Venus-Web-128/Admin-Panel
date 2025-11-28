import  { useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar با دکمه بورگر */}
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex pt-16">
        <Sidebar sidebarOpen={sidebarOpen} />
        <section id="content_section" className="flex-1 p-4">
          {/* محتوای اصلی */}
        </section>
      </div>
    </div>
  );
};

export default Index;
