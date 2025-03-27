import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center px-36 justify-between">
      {/* left side */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold ">LearnX</h1>
      </div>
      {/* right side */}
      <div className="flex items-center gap-4 my-8">
        <div className="flex gap-8">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-gray-500"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink className="text-gray-500" to="#about">
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-gray-500"
            }
            to="/courses"
          >
            Courses
          </NavLink>
          <NavLink className="text-gray-500" to="#instructors">
            Instructors
          </NavLink>

          <NavLink
           className="text-gray-500"
            to="#contact"
          >
            Contact Us
          </NavLink>
        </div>
        <div className="ml-12 flex gap-4">
          <button
            className="rounded-xl py-1 px-3 border-none duration-500 cursor-pointer hover:scale-105  hover:bg-gray-100"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="rounded-xl text-white bg-blue-500 py-1 px-3 border-none duration-500 hover:scale-105  hover:bg-blue-800 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
