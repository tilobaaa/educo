import React, { useState } from "react";
import TextInput from "../../../components/TextInput";
import { useNavigate } from "react-router-dom";

const Setup = () => {
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate()
  return (
    <div className=" h-screen flex flex-col p-8">
      <div className="mb-8">
        <h1 className="font-bold text-3xl">Learn X</h1>
      </div>
      <div className=" flex-1 flex items-center justify-center">
        {!showPage ? (
          <div className="flex flex-col gap-4 items-center justify-center ">
            <h1 className="font-semibold text-2xl">
              Set up your profile as a Teacher
            </h1>
            <button
              className="py-4 px-8 bg-blue-800 text-gray-900 w-fit rounded-3xl border-none cursor-pointer"
              onClick={() => {
                setShowPage(true);
              }}
            >
              Next
            </button>
          </div>
        ) : (
          <div>
            <h1 className="font-semibold text-2xl">Identify verification (Upload ID, Qualifications)</h1>
            <form action="" className="flex flex-col gap-4 my-4 items-center">
                <TextInput placeholder='Email'/>
                <TextInput placeholder="Password"/>
                <TextInput placeholder="Re-enter Password"/>
                <TextInput placeholder="Social Links"/>
                <TextInput placeholder="Qualifications"/>
                <div className="w-5/6 flex gap-4 px-2">
                    <button className="flex-3 bg-[#FFD05A] p-4 rounded-3xl cursor-pointer ">Record or Upload a video</button>
                    <button onClick={()=>{navigate('/teacher/profileSetup')}} type="button" className=" flex-1 bg-blue-400 p-4 rounded-3xl cursor-pointer">Next</button>
                </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setup;
