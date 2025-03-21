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
      backgroundColor: "rgba(75, 192, 192, 0.6)",
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
    <div style={{ width: "500px", height: "300px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityBar;
