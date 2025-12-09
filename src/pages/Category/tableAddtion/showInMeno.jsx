const ShowInMenu = ({ rowData }) => {
  const isShown = rowData.show_in_menu;

  return (
    <span
      className={`font-semibold ${
        isShown ? "text-green-500" : "text-red-500"
      }`}
    >
      {isShown ? "نمایش داده می‌شود" : "نمایش داده نمی‌شود"}
    </span>
  );
};

export default ShowInMenu;
