import React from "react";
import { IoGrid } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import ActivityBar from "../../components/ActivityBar";



const Dashboard = () => {
  return (
    <div className="flex">
      {/* left */}
      <div className="h-screen bg-gray-900 flex-1 flex flex-col items-center gap-32 text-white pt-16 text-3xl">
        <div className="bg-blue-500 p-4 rounded-lg cursor-pointer">
          <IoGrid />
        </div>
        <div className="flex flex-col gap-16">
          <GiGraduateCap />
          <FaRegLightbulb />
          <MdOutlineMessage />
        </div>
      </div>
      <div className="flex-11 p-8">
        {/* main */}

        <nav className="flex justify-between mb-8">
          <h1 className="text-5xl">Dashboard</h1>
          <div className="text-gray-500 flex gap-4 items-center">
            <div className="border border-gray-400 py-1 px-2 rounded-lg relative">
              <input
                placeholder="search"
                type="text"
                className="w-full h-full"
              />
              <IoMdSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 " />
            </div>

            <IoMdNotificationsOutline className="text-2xl" />
            <IoSettingsOutline className="text-2xl" />
          </div>
        </nav>
        <h6>OVERVIEW</h6>
        <div className="grid grid-cols-6">
          <div className="col-span-4 ">
            <div className="flex gap-6 items-center justify-center">
              <div className="p-4 flex flex-col gap-6 border-gray-500 shadow-sm rounded-lg">
                <p className="text-sm text-gray-500">Courses in Progress</p>
                <p className="text-4xl">3</p>
              </div>
              <div className="p-4 flex flex-col gap-4 border-gray-500 shadow-sm">
                <p className="text-sm text-gray-500">Assigned Lessons</p>
                <p className="text-4xl">7</p>
              </div>
              <div className="p-4 flex flex-col gap-4 border-gray-500 shadow-sm ">
                <p className="text-sm text-gray-500">Hours Learning</p>
                <p className="text-4xl">3h 15m</p>
              </div>
            </div>
           {/* charts of study stats and progress */}
           <div>
          <ActivityBar/>
           </div>
          </div>
          {/* right side */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
