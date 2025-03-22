import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "STUDY STATISTICS",
      data: [2, 9, 4, 5, 12, 7, 7],
      backgroundColor: (ctx) => {
        const value = ctx.raw;
        return value <= 7
          ? "#2d9bdb39"
          : value <= 9
          ? "#2d9bdb87"
          : "#2D9CDB";
      },
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: true, position: "top" },
    tooltip: { enabled: true },
  },
  scales: {
    y: {
      ticks: { display: false },
      grid: { display: false },
    },
    x: {
      grid: { display: false },
    },
  },
};

const ActivityBar = () => {
  return (
    <div className="w-5/6 h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityBar;
