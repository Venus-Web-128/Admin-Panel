import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <section id="content_section" className="flex-1 p-4">
          {/* محتوای اصلی */}
        </section>
      </div>
    </div>
  );
};

export default Index;
