import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate= useNavigate();
  const [teacher, setTeacher] = useState(true);

  return (
    <div className="flex-1 px-36 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Sign in as a {teacher ? "Teacher" : "Student"}</h1>
      <form action="" className="py-8 flex flex-col gap-2 w-1/3">
        <div>
          <label htmlFor="email"></label>
          <input
            className="border rounded-sm border-gray-300 w-full py-4 px-2"
            type="email"
            name="email"
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            className="border rounded-sm border-gray-300 w-full py-4 px-2"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <button
            onClick={() => {
              teacher
                ? navigate("/teacher/dashboard")
                : navigate("/student/dashboard");
            }}
            className="bg-blue-500 text-white py-4 rounded-sm hover:cursor-pointer"
            type="button"
          >
            Login
          </button>
        <button className="pt-4 text-blue-500 hover:cursor-pointer">
          Forgot Password
        </button>
      </form>
      <p>or</p>
      <div className="flex gap-4 justify-center mt-4">
        <button className=" py-2 px-4 border border-gray-300 flex items-center gap-2">
          <FcGoogle /> Google
        </button>
        <button className="py-2 px-4 border border-gray-300 flex items-center gap-2">
          <FaFacebook className="text-blue-500" />
          Facebook
        </button>
      </div>

      <p className="text-gray-300 my-2">
        Don't have an acoount?{" "}
        <NavLink className="text-blue-500">Sign Up</NavLink>
      </p>
      <p onClick={()=>{setTeacher(prev=> !prev)}} className="text-blue-500 font-bold cursor-pointer text-lg">
      Sign in as a {teacher ?  "Student": "Teacher"} instead?
      </p>
    </div>
  );
};

export default Login;
