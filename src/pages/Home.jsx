import React from "react";

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
          <p className="text-4xl font-bold">34K +</p>
          <p>Success Stories</p>
        </div>
        <hr/>
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
      <div className="grid-cols-2">
        <div className="col-span-1">
            <p className="text-gray-200">WHO WE ARE</p>
            <h2>Your Online Learning Partner </h2>
            <p>Egestas faucibus nisl et ultricies. Tempus lectus condimentum tristique mauris id vitae. Id pulvinar a eget vitae pellentesque ridiculus platea. Vulputate cursus.</p>
        </div>
        <div className="bg-gray-300 rounded-lg col-span-1">
            <p>video Course</p>
            <p>(1/110)</p>
            <div className="text-gray-400">
                <div className="px-4 py-2 flex justify-between">
                    <p>Introduction</p>
                    <p>7:00</p>
                </div>
                <div>
                    <p className="bg-primary-500 text-white">Social Media Marketing</p>
                    <p>65:00</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
