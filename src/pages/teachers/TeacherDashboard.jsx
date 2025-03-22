import React from "react";
import { IoGrid } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import ActivityBar from "../../components/ActivityBar";
import ProgressChartBar from "../../components/ProgessChartBar";
import CourseCompletionChart from "../../components/CourseCompletionChart";
import CommentCard from "../../components/CommentCard";



const TeacherDashboard = () => {
  return (
    <div className="flex">
      {/* left */}
      <div className="h-screen bg-[#1C1B1F] w-24 flex flex-shrink-0 flex-col items-center gap-32 text-white pt-16 text-3xl fixed">
        <div className="bg-orange-500 p-4 rounded-lg cursor-pointer">
          <IoGrid />
        </div>
        <div className="flex flex-col gap-16">
          <GiGraduateCap />
          <FaRegLightbulb />
          <MdOutlineMessage />
        </div>
      </div>
      {/* center */}
      <div className="ml-24 flex-11 p-8 pr-4">
        {/* main */}

        <nav className="flex justify-between mb-8">
          <h1 className="text-5xl">My Courses</h1>
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
        <h6>Progress</h6>
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
           <div className="flex justify-between m-8 items-center">
          <ActivityBar/>
          <ProgressChartBar/>
           </div>
           <div>
            <h6>MY COURSES</h6>
            <div className="flex gap-4">
              <CourseCompletionChart percentage={91} topic={'Introduction to Basic Technology'} bgColor='#9747FF'/>
              <CourseCompletionChart percentage={25} topic={'Introduction to Basic Technology'} bgColor={'#2F80ED'}/>
              <CourseCompletionChart percentage={65} topic={'Introduction to Basic Technology' } bgColor={'#56CCF2'}/>
             
              
            </div>
           </div>
          </div>
          {/* right side */}
          <div className="ml-8 my-auto">
            <h6>COMMENTS</h6>
            <div>
              <CommentCard/>
              <CommentCard/>
              <CommentCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
