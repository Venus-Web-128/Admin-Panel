const SidebarItem = ({ icon, label, active = false, sectionId = "" }) => {
  return (
    <li
      className={`group px-4 py-2 flex items-center gap-3 cursor-pointer select-none transition-colors  
      ${active ? "bg-gray-800 text-blue-400" : "text-gray-200 hover:bg-gray-800 hover:text-blue-500 "} focus-within:bg-gray-800`}
      data-section-id={sectionId}
    >
      <i className={`${icon} text-inherit text-lg transition-colors`}></i>
      <span className="text-sm text-inherit whitespace-nowrap transition-colors ">{label}</span>
    </li>
  );
};

export default SidebarItem;
