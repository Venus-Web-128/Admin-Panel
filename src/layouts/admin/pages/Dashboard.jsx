import React, { useEffect } from "react";
import { setDashboardChart } from "../utils/DashboardChar";
import Card from "./Card";
import ProductTable from "./ProductTable";

const Dashboard = () => {
  useEffect(() => {
    const labels = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
    const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
    setDashboardChart(labels, datapoints);
  }, []);

  return (
    <div id="dashboard_section" className="pt-20 pr-0 px-4 w-full md:px-6 lg:px-8 space-y-8">
      {/* کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card currentValue={"1,500,000"} title="درآمد امروز" desc="جمع مبالغ پرداختی (تومان)" icon="fas fa-money-check-alt" lastWeekValue={"6,380,000"} lastMonthValue={"24,380,000"} />
        <Card currentValue={54} title="سفارشات امروز" desc="سفارشات کامل و دارای پرداختی" icon="fas fa-luggage-cart" lastWeekValue={263} lastMonthValue={1038} />
        <Card currentValue={5} title="سفارشات لغوشده امروز" desc="سفارشات لغو شده در 24 ساعت" icon="fas fa-times-circle" lastWeekValue={16} lastMonthValue={64} />
        <Card currentValue={7} title="سبد خرید امروز" desc="سبدهای خرید مانده امروز" icon="fas fa-shopping-basket" lastWeekValue={13} lastMonthValue={18} />
      </div>

      {/* جدول و نمودار */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 h-full">
          <p className="text-center text-base md:text-lg font-semibold text-gray-700 mb-3">محصولات رو به اتمام</p>
          <ProductTable />
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 h-full">
          <p className="text-center text-base md:text-lg font-semibold text-gray-700 mb-3">نمودار فروش در ماه گذشته</p>
          <div className="flex items-center justify-center h-48 md:h-64">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
