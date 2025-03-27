import React from "react";
import { FiSave } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";

const CourseGrid = ({title, lessons, author, img}) => {
  return (
    <div className="rounded-lg bg-gray-50 p-4 text-left m-4">
      <div className="bg-orange-200 w-full h-64 rounded-lg">
        <img className="w-full h-full rounded-lg" src={img} alt="" />
      </div>
      <div className="py-2 flex flex-col gap-6">
    
        <h2 className="text-gray-900 font-semibold text-2xl">
         {title}
        </h2>
        <div className="text-gray-500 flex gap-4">
          <div className="flex gap-1 items-center">
            <FiSave />
            <p>{lessons} Lessons</p>
          </div>
          <div className="flex gap-1 items-center">
            <MdAccessTime />
            <p>24hr 40Mins</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-lg font-semibold">
          <div className="flex gap-2 items-center ">
            <div className="bg-orange-200 rounded-full w-12 h-12"></div>
            <h5 className="text-gray-900">{author}</h5>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
