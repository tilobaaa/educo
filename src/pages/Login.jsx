import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex-1 px-36 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>Sign in as a Teacher</h1>
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
            <input className="border rounded-sm border-gray-300 w-full py-4 px-2" type="password" name="password" placeholder="Password" />
          </div>
          
            <button className="bg-blue-500 text-white py-4 rounded-sm hover:cursor-pointer">Login</button>
            <button className="py-4 text-blue-500 hover:cursor-pointer">Forgot Password</button>
          
        </form>
        <p>or</p>
        <div className="flex gap-4 justify-center my-4">
          <button className=" py-2 px-4 border border-gray-300">Google</button>
          <button className="py-2 px-4 border border-gray-300">Facebook</button>
        </div>


        <p className='text-gray-300'>Don't have an acoount? <NavLink className='text-blue-500'>Sign Up</NavLink></p>
    </div>
  )
}

export default Login
