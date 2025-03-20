import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Sat", "SUN", "MON", "TUE", "WED", "THU", "FRI"],
  datasets: [
    {
      label: "STUDY STATISTIC",
      data: [2, 8, 4, 6, 12, 7, 7],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="flex">
      {/* left */}
      <div className="h-screen bg-gray-900 flex-1">
        
      </div>
      <div className="flex-7 ">
        {/* options */}
        <div></div>
        {/* main */}
        <div className="">
          <h6>OVERVIEW</h6>
          <div className="flex justify-around gap-6">
            <div className="p-4 flex flex-col gap-4 border-gray-500 shadow-sm ">
              <p className="text-sm text-gray-500">Courses in Progress</p>
              <p className="text-4xl">3</p>
            </div>
            <div className="p-4 flex flex-col gap-4 border-gray-500 shadow-sm ">
              <p className="text-sm text-gray-500">Courses in Progress</p>
              <p className="text-4xl">3</p>
            </div>
            <div className="p-4 flex flex-col gap-4 border-gray-500 shadow-sm ">
              <p className="text-sm text-gray-500">Courses in Progress</p>
              <p className="text-4xl">3</p>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex-4"></div>
    </div>
  );
};

export default Dashboard;
