import React from "react";
import CourseGrid from "../components/CourseGrid";

const Home = () => {
  return (
    <div>
      {/* main */}
      <div className="p-8 grid grid-cols-4 ">
        {/* left */}
        <div className="col-span-1 relative">
          <div className="absolute right-8 top-8">
            <div className="bg-orange-200 w-36 h-36 "></div>
            <h4>How it Works</h4>
            <p>2 mins</p>
          </div>
        </div>
        {/* middle */}
        <div className="col-span-2 text-center flex flex-col gap-4">
          <p className="text-green-300">EDUCATION & ONLINE COURSES</p>
          <h1 className="text-9xl">Welcome to uzzschool</h1>
          <p className="text-gray-500">Apply to uzzschool</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex gap-6 justify-center items-center">
            <button className="bg-amber-300 py-4 px-4 rounded-xl">
              Apply now
            </button>
            <button className="py-4 px-4 rounded-xl">Learn More</button>
          </div>

          <p className="mt-8 font-bold">Scroll Down</p>
        </div>
        {/* right */}
        <div className="col-span-1 text-right relative">
          <div className="absolute bottom-4 left-16 flex flex-col gap-2">
            <div className="bg-orange-200 h-48 w-36 rounded-lg"></div>
            <div>
              <h4 className="font-bold text-black">Betty Calhoun</h4>
              <p className="text-gray-400 text-xs">Lead Instructor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 text-white flex items-center justify-center gap-8 py-8">
        <div>
          <p className="text-4xl font-bold">34K +</p>
          <p>Success Stories</p>
        </div>
        <hr />
        <div>
          <p className="text-7xl font-bold">34K +</p>
          <p>Success Stories</p>
        </div>
        <hr />
        <div>
          <p className="text-4xl font-bold">34K +</p>
          <p>Success Stories</p>
        </div>
        <hr />
        <div>
          <p className="text-4xl font-bold">34K +</p>
          <p>Success Stories</p>
        </div>
        <hr />
      </div>

      {/* who we are  */}
      <div className="grid grid-cols-2 px-36 my-36">
        <div className="col-span-1 px-24 flex flex-col gap-4">
          <p className="text-green-300 text-lg">WHO WE ARE</p>
          <h2 className="text-6xl text-black font-semibold">
            Your Online Learning Partner{" "}
          </h2>
          <p className="text-gray-400 text-lg">
            Egestas faucibus nisl et ultricies. Tempus lectus condimentum
            tristique mauris id vitae. Id pulvinar a eget vitae pellentesque
            ridiculus platea. Vulputate cursus.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg col-span-1 p-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">video Course</p>
            <p>(1/110)</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="p-3 flex justify-between bg-blue-500 text-gray-50 rounded-lg">
              <p>Introduction</p>
              <p>7:00</p>
            </div>
            <div className="p-3 flex justify-between">
              <p className="text-gray-500">Social Media Marketing</p>
              <p>65:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* options/featurs */}
      <div className="  flex gap-4 justify-center">
        <div className="bg-gray-200 rounded-lg w-80 h-56 p-4">
          <h6 className="text-2xl font-semibold mb-4">Online Courses</h6>
          <p className="text-gray-500 text-sm">
            Egestas faucibus nisl et ultricies. Tempus lectus condimentum
            tristique mauris id vitae. Id pulvinar eget vitae.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg w-80 h-56 p-4">
          <h6 className="text-2xl font-semibold mb-4">Online Courses</h6>
          <p className="text-gray-500 text-sm">
            Egestas faucibus nisl et ultricies. Tempus lectus condimentum
            tristique mauris id vitae. Id pulvinar eget vitae.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg w-80 h-56 p-4">
          <h6 className="text-2xl font-semibold mb-4">Online Courses</h6>
          <p className="text-gray-500 text-sm">
            Egestas faucibus nisl et ultricies. Tempus lectus condimentum
            tristique mauris id vitae. Id pulvinar eget vitae.
          </p>
        </div>
      </div>
      {/* Featured courses */}
      <div className="p-36 my-36 flex flex-col gap-4 text-center bg-gray-100">
        <p className="text-green-500 text-lg">FEATURED COURSES</p>
        <h2 className="text-gray-900 font-semibold text-5xl">
          Browse Our Popular Courses
        </h2>
        <p className="text-gray-500 text-sm">
          Egestas faucibus nisl et ultricies. Tempus lectus condimentum
          tristique mauris id vitae. Id <br /> pulvinar a eget vitae
          pellentesque ridiculus platea. Vulputate cursus.
        </p>
        <div className="grid grid-cols-3 my-12 mx-30">
          <CourseGrid />
          <CourseGrid />
          <CourseGrid />
          <CourseGrid />
          <CourseGrid />
          <CourseGrid />
        </div>
        <div>

        <button className="text-gray-900 rounded-4xl cursor-pointer bg-amber-300 p-4 w-fit">Explore all Courses</button>
        </div>
      </div>
      {/* why choose us? */}
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-amber-500 "></div>
          <div className="bg-gray-500 rounded-lg text-gray-900 flex-1 p-4"> Learn at your own pace with lifetime access on mobile and desktop</div>
        </div>
        <div className="flex flex-col gap-4">
          <p>WHY CHOOSE US</p>
          <h2>Your Learning Journey, Your Way</h2>
          <p>Nibh consectetur morbi fusce aliquet scelerisque. Quis dis orci eleifend vel at sed et. Laoreet tristique ut fringilla augue vitae. Turpis volutpat morbi risus imperdiet viverra odio. Fringilla sit ut mattis.</p>
          <div></div>

        </div>
      </div>
    </div>
  );
};

export default Home;
