import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [

    {
      data: [80, 20], // Second progress ring (80%)
      backgroundColor: ["#2D9CDB", "rgba(0, 0, 0, 0)"], // Second ring color, transparent background
      borderWidth: 0,
      cutout: "75%", // Makes it thinner
    },
    {
      data: [50, 50], // Progress (50%) and remaining (50%)
      backgroundColor: ["#1e2939", "#EAEAEA"], // Progress color & grey background
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  cutout: "80%", // Creates the hollow center
  plugins: {
    legend: { display: true, position: "bottom" }, 
    tooltip: { enabled: false}, // Disables tooltips
  },
};

const ProgressChartBar = () => {
  return (
    <div  className="relative p-4 w-fit bg-white rounded-lg shadow-sm">
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          
        
        }}
      >
       <p className="text-gray-800 text-3xl text-center">50%</p> 
       <p className="text-[#2D9CDB] text-center text-lg">80%</p>
      </div>
    </div>
  );
};

export default ProgressChartBar;

