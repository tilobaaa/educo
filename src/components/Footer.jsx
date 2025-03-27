import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-48 py-12 ">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Learn X</h2>
          <p className="text-gray-500">
            Faucibus quis fringilla scelerisque dui. Amet <br />
            parturient dui venenatis amet sagittis <br />
            viverra vel tincidunt. Orci tincidunt.
          </p>
          <button className="bg-blue-500 rounded-3xl p-4 text-white w-fit">
            Start Live Chart
          </button>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h6 className="font-semibold text-3xl mb-2">Company</h6>
            <ul className="text-sm text-gray-500 flex flex-col gap-3">
              <li>Home</li>
              <li>About us</li>
              <li>Courses</li>
              <li>Instructors</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-3xl mb-2">Company</h6>
            <ul className="text-sm text-gray-500 flex flex-col gap-3">
              <li>Home</li>
              <li>About us</li>
              <li>Courses</li>
              <li>Instructors</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-3xl mb-2">Company</h6>
            <ul className="text-sm text-gray-500 flex flex-col gap-3">
              <li>Home</li>
              <li>About us</li>
              <li>Courses</li>
              <li>Instructors</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
