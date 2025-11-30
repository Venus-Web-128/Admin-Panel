const Card = ({ currentValue, title, desc, icon, lastWeekValue, lastMonthValue }) => {
  return (
    <div className="h-full flex flex-col">
      {/* کارت اصلی */}
      <div className="flex-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-between p-5">
          <div>
            <h4 className="text-2xl font-bold">{currentValue}</h4>
            <h6 className="text-lg font-semibold truncate">{title}</h6>
            <small className="opacity-80 truncate">{desc}</small>
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
            <i className={`${icon} text-2xl`}></i>
          </div>
        </div>
      </div>

      {/* کارت مقایسه هفته و ماه */}
      <div className="mt-3 bg-white rounded-lg shadow-md p-3 flex flex-col gap-1 text-gray-700 hover:bg-gray-50 transition-colors duration-300">
        <small className="truncate"><b className="text-indigo-600">{lastWeekValue}</b> در هفته گذشته</small>
        <small className="truncate"><b className="text-pink-600">{lastMonthValue}</b> در ماه گذشته</small>
      </div>
    </div>
  );
};

export default Card;
