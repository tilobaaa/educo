import React from "react";

const CourseGrid = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-4 text-left m-4">
      <div className="bg-orange-200 w-full h-64 rounded-lg"></div>
      <div className="py-2 flex flex-col gap-6">
        <div className="flex justify-between">
          <p className="rounded-lg px-2 text-green-500 bg-gray-200 ">
            Digital Marketing
          </p>
          <div className="flex gap-2">
            <p className="text-gray-500 font-semibold">4.8</p>
            <p className="text-gray-400">5.8k</p>
          </div>
        </div>
        <h2 className="text-gray-900 font-semibold text-2xl">
          The Ultimate Guide to Social Media Marketing for small Businesses
        </h2>
        <div className="text-gray-500 flex gap-4">
          <p>12 Lessons</p>
          <p>24hr 40Mins</p>
        </div>

        <div className="flex items-center justify-between text-lg font-semibold">
          <div className="flex gap-2 items-center ">
            <div className="bg-orange-200 rounded-full w-12 h-12"></div>
            <h5 className="text-gray-900">Anthony Wade</h5>
          </div>
          <p className="text-blue-500">60.00</p>
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
