
const Rightcontent = () => {
  return (
    <div className="flex items-center h-full space-x-4">
      <a href="/" className="h-10">
        <img src="/assets/images/logo.png" className="h-full" alt="Logo" />
      </a>
      <div className="hidden md:block">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-400 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
          <div className="absolute w-5 h-5 bg-white rounded-full translate-x-1 peer-checked:translate-x-6 transition-transform"></div>
        </label>
      </div>
    </div>
  );
};

export default Rightcontent;
