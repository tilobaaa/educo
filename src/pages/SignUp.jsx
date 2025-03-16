import React from "react";

const SignUp = () => {
  return (
    <div className="flex-1 grid grid-cols-3 px-36">
      {/* left side  */}
      <div className=" col-span-1 my-auto px-8">
        <h1 className="text-3xl font-bold">Sign up as a student</h1>

        <form action="" className="py-8 flex flex-col gap-2">
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
            <input className="border rounded-sm border-gray-300 w-full py-4 px-2" type="password" name="password" placeholder="Password" />
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
          
            <button className="bg-blue-500 text-white py-4 rounded-sm hover:cursor-pointer">Login</button>
            <button className="py-4 text-blue-500 hover:cursor-pointer">Forgot Password</button>
          
        </form>
        <p>or</p>
        <div className="flex gap-4 justify-center">
          <button className=" py-2 px-4 border border-gray-300">Google</button>
          <button className="py-2 px-4 border border-gray-300">Facebook</button>
        </div>
      </div>
      {/* right side */}
      <div className="col-span-2 bg-blue-50">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default SignUp;
