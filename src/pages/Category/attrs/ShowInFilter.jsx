const ShowInFilter = ({ rowData }) => {
  const isShown = rowData.in_filter; // تغییر نام فیلد

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

export default ShowInFilter;


