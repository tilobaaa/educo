import React, { useState } from "react";
import studentImg from "/assets/student.jpg";
import teacherImg from "/assets/teacher.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [teacher, setTeacher] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex-1 grid grid-cols-3 px-36">
      {/* left side  */}
      <div className=" col-span-1 my-auto px-8 flex flex-col gap-1 ">
        <h1 className="text-3xl font-bold">
          Sign up as a {teacher ? "teacher" : "student"}
        </h1>

        <form action="" className=" flex flex-col gap-2">
          <div>
            <label htmlFor="email"></label>
            <input
              className="border rounded-sm border-gray-300 w-full py-4 px-2"
              type="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          {!teacher && (
            <div className="relative text-gray-500">
              <select
                className="border border-gray-300 w-full py-4 px-2 "
                name="Level"
                id=""
              >
                <option value="--">Educational Level</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>
          )}
          <div>
            <label htmlFor="password"></label>
            <input
              className="border rounded-sm border-gray-300 w-full py-4 px-2"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password"></label>
            <input
              className="border rounded-sm border-gray-300 w-full py-4 px-2"
              type="password"
              name="comfirm-password"
              placeholder="Repeat Password"
            />
          </div>

          <button
            onClick={() => {
              teacher
                ? navigate("/teacher/setup")
                : navigate("/student/dashboard");
            }}
            type="button"
            className="bg-blue-500 text-white py-4 rounded-sm hover:cursor-pointer"
          >
            Sign up
          </button>
        </form>
        <div className="w-full flex items-center justify-center">
          <p>or</p>
        </div>
        <div className="flex gap-4 justify-center mt-2">
          <button className=" py-2 px-4 border border-gray-300 flex items-center gap-2">
            <FcGoogle /> Google
          </button>
          <button className="py-2 px-4 border border-gray-300 flex items-center gap-2">
            <FaFacebook className="text-blue-500" />
            Facebook
          </button>
        </div>
        <div className="py-4 text-blue-500 font-bold underline cursor-pointer text-lg text-center hover:font-extrabold duration-500 transform scroll-smooth">
          <p
            onClick={() => {
              setTeacher((prev) => !prev);
            }}
          >
            Sign up as a {teacher ? "student" : "teacher"}?
          </p>
        </div>
      </div>
      {/* right side */}
      <div className="col-span-2 bg-blue-50">
        <img
          className="w-full"
          src={teacher ? teacherImg : studentImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUp;
