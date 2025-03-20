import React from "react";
import { FaVideo } from "react-icons/fa6";
import { GoThumbsup, GoVerified } from "react-icons/go";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";

const InstructorsGrid = () => {
  return (
    <div className="m-4 rounded-lg text-left">
      <div className="relative h-64 bg-orange-200 p-4 rounded-t-lg">
        <div className="absolute bottom-4 p-2 bg-gray-100 rounded-lg flex gap-2">
          <span>
            <GoThumbsup className="text-sm text-green-300" />
          </span>
          <p className="text-sm text-green-300">Positive Feedback</p>
        </div>
      </div>
      <div className="p-4 bg-white flex flex-col gap-2 rounded-b-lg">
        <p className="text-xs text-gray-300">Expert in Digital Marketing</p>
        <div className="flex gap-1 items-center text-xl">
          <h4 className="text-xl font-semibold text-gray-900">Anthony Wade</h4>
          <span>
            <MdOutlineVerified className="text-green-300" />
          </span>
        </div>
        <div className="text-xs flex justify-between text-gray-300">
          <div className="flex gap-2 items-center">
            <MdAccessTimeFilled className="text-gray-900" />
            <p>24+h taught</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaVideo className="text-gray-900" />
            <p>video chat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsGrid;
