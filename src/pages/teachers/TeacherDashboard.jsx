import React from "react";
import { IoGrid } from "react-icons/io5";

import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import ActivityBar from "../../components/ActivityBar";
import ProgressChartBar from "../../components/ProgessChartBar";
import CourseCompletionChart from "../../components/CourseCompletionChart";
import CommentCard from "../../components/CommentCard";
import { FaListUl } from "react-icons/fa6";
import { MdOutlineManageHistory } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { MdContactEmergency } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const TeacherDashboard = () => {
  return (
    <div className="flex">
      {/* left */}
      <div className="h-screen bg-blue-500 w-50 flex flex-shrink-0 flex-col  text-white pt-16  fixed">
        <p className="p-4">MANAGE</p>
        <div className="flex flex-col gap-4 text-lg ">
          <div className="p-4 flex gap-4 items-center cursor-pointer hover:bg-gray-100 rounded-lg group">
            <IoGrid className="group-hover:text-blue-500" />
            <p className="group-hover:text-gray-900">Overview</p>
          </div>
          <div className="p-4 flex gap-4 items-center cursor-pointer hover:bg-gray-100 rounded-lg group">
            <FaListUl className="group-hover:text-blue-500" />
            <p className="group-hover:text-gray-900">Create</p>
          </div>
          <div className="p-4 flex gap-4 items-center cursor-pointer hover:bg-gray-100 rounded-lg group">
            <MdOutlineManageHistory className="group-hover:text-blue-500" />
            <p className="group-hover:text-gray-900">Manage</p>
          </div>
          <div className="p-4 flex gap-4 items-center cursor-pointer hover:bg-gray-100 rounded-lg group">
            <RiGroupLine className="group-hover:text-blue-500" />
            <p className="group-hover:text-gray-900">Users</p>
          </div>
          <div className="p-4 flex gap-4 items-center cursor-pointer hover:bg-gray-100 rounded-lg group">
            <MdContactEmergency className="group-hover:text-blue-500" />
            <p className="group-hover:text-gray-900">Insights</p>
          </div>
          <div className="p-4 flex gap-4 items-center cursor-pointer hover:bg-gray-100 rounded-lg group">
            <IoIosTimer className="group-hover:text-blue-500" />
            <p className="group-hover:text-gray-900">Rewatch Video</p>
          </div>
        </div>
        <div className="mt-16 p-4 text-lg">
          <p className="py-4">Preference</p>
          <div className="p-4 flex gap-4 items-center cursor-pointer hover:bg-gray-100 rounded-lg group">
            <MdOutlineSecurity className="group-hover:text-blue-500" />
            <p className="group-hover:text-gray-900">Security</p>
          </div>
        </div>
      </div>
      {/* the rest*/}
      <div className="ml-50 flex-11 p-10">
        {/* main */}

        <nav className="flex justify-between items-center text-gray-500  mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Teacher dashboard</h1>
          
            {/* search item */}
            <div className="border border-gray-400 py-2 px-4  rounded-lg relative w-1/3 ">
              <input
                placeholder="search"
                type="text"
                className="w-full h-full outline-none"
              />
              <IoMdSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 " />
            </div>
            {/* right item */}
            <div className="flex gap-4 items-center">
              <IoMdNotificationsOutline className="text-2xl" />
              <div className="flex items-center gap-4">
                <p>Bright Feranmi</p>
                <img className="w-12 h-12 rounded-full" src="" alt="" />
              </div>
            </div>
        
        </nav>
        <div className="flex justify-between items-center">
        <h6 className="text-3xl font-semibold">Create Assignment</h6>
        <button className="flex items-center gap-1 bg-gray-100 rounded-lg p-2">
          <p>Overall</p>
          <MdOutlineKeyboardArrowDown className="text-lg"/>
        </button>
        </div>

        {/* options */}
       <div className="my-8 text-gray-500 flex gap-6">
        <div className="flex flex-col gap-2 ">
          <p className="text-gray-800 font-semibold text-xl">Subject</p>
          <button className="flex items-center gap-1 rounded-md p-4 border border-black w-fit">
          <p>7th grade math</p>
          <MdOutlineKeyboardArrowDown className="text-lg"/>
        </button>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-gray-800 font-semibold text-xl">Unit</p>
          <button className="flex items-center gap-1 rounded-md p-4 border border-black w-fit">
          <p>7th grade math</p>
          <MdOutlineKeyboardArrowDown className="text-lg"/>
        </button>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-gray-800 font-semibold text-xl">Filter</p>
          <button className="flex items-center gap-1 rounded-md p-4 border border-black w-fit">
          <p>7th grade math</p>
          <MdOutlineKeyboardArrowDown className="text-lg"/>
        </button>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-gray-800 font-semibold text-xl">Subject</p>
          <button className="flex items-center gap-1 rounded-md p-4 border border-black w-fit">
          <p>7th grade math</p>
          <MdOutlineKeyboardArrowDown className="text-lg"/>
        </button>
        </div>
       </div>
       
       {/* welcome text */}
       <div className="  m-12 mt-15 bg-gray-50 rounded-lg flex items-center justify-center text-lg">
        <p className="text-center py-16 px-32 w-1/2 font-semibold text-gray-500">Welcome, Educators! 🎉<br />
We’re thrilled to have you on board! As a valued teacher, you play a vital role in shaping young minds, and our platform is here to make your journey smoother and more impactful. From seamless onboarding to intuitive tools that enhance student engagement, we’ve designed everything with you in mind.
Get ready to inspire, connect, and create a thriving learning environment—all in one place! 🚀 <br />
Let’s make learning unforgettable.</p>
       </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
