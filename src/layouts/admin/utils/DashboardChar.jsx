import Chart from "chart.js/auto";

let chartInstance = null;

export const setDashboardChart = (labels, datapoints) => {
  const data = {
    labels,
    datasets: [
      {
        label: "فروش ماه",
        data: datapoints,
        borderColor: "#0062ff",
        backgroundColor: "rgba(0, 98, 255, 0.2)",
        fill: true,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };

  const config = {
    type: "line",
    data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "نمودار فروش یک سال گذشته",
        },
        legend: {
          display: true,
          position: "bottom",
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "ماه‌ها",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "میلیون تومان",
          },
          suggestedMin: 0,
          suggestedMax: 200,
        },
      },
    },
  };

  const canvas = document.getElementById("myChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // پاک کردن نمودار قبلی
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, config);
};
