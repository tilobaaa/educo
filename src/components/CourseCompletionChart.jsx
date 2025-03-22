import React from "react";
import { PiGraduationCap } from "react-icons/pi";
import { SlOptionsVertical } from "react-icons/sl";
import { IoPerson } from "react-icons/io5";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


const CourseCompletionChart = ({percentage, topic, bgColor}) => {

    const data = {
        datasets: [
          {
            data: [percentage, 100-percentage], // Second progress ring (80%)
            backgroundColor: ["#1e2939", "#fff"], // Second ring color, transparent background
            borderWidth: 0,
            cutout: "90%", // Makes it thinner
          },
        ],
      };
      
      const options = {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }, // Disables tooltips
        },
      };
      
  return (
    <div className={`p-4 rounded-lg  shadow-sm text-gray-800 w-full`} style={{ backgroundColor: bgColor }}>
      <div className="flex justify-between my-2 items-center">
        <PiGraduationCap />
        <SlOptionsVertical />
      </div>
      <div className="my-4">
        <p>{topic}</p>
        <div className="flex gap-2">
          <IoPerson />
          <p>Shams Tabrez</p>
        </div>
      </div>
      <div className="relative p-4 h-48 w-48 m-auto rounded-lg ">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-gray-800 text-lg text-center">{percentage}% complete</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCompletionChart;
