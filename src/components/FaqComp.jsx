import React, { useState } from "react";

const FaqComp = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p className="text-gray-900 font-semibold">What is an online course?</p>
        <p
          className="text-2xl cursor-pointer transition-transform duration-300"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "X" : "+"}
        </p>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          show ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-500">
          Eget elit at a est id scelerisque ut. Cum massa ut egestas sed
          sagittis. Vitae dui amet facilisi id nibh urna viverra. Aliquam dui
          ante tempor id.
        </p>
      </div>
    </div>
  );
};

export default FaqComp;
