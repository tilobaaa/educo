import React from "react";

const CommentCard = () => {
  return (
    <div className="flex gap-6 my-4">
        <div >
        <hr className="border-4 border-cyan-500 h-full"/>
        </div>
      
      <div className="flex gap-4">
        <img className="w-12 h-12 rounded-full" src="" alt="" />
        <div>
          <p className="text-lg text-gray-500"><span className="text-gray-700">Felix</span> has replied on</p>
          <p className="text-gray-800 text-lg">At aliquam enim in cras arcu</p>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labo...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
