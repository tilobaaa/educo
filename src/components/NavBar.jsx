import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center px-36 justify-between'>
      {/* left side */}
      <div className='flex items-center'>
        <h1 className='text-3xl '>LearnX</h1>
      </div>
      {/* right side */}
      <div className='flex items-center gap-4 my-8'>
        <div className='flex gap-8'>
            <NavLink className={({ isActive})=>isActive ? "text-black font-bold": "text-grey"} to="/">Home</NavLink>
            <NavLink className={({ isActive})=>isActive ? "text-black font-bold": "text-grey"} to="/about">About Us</NavLink>
            <NavLink className={({ isActive})=>isActive ? "text-black font-bold": "text-grey"} to='/courses'>Courses</NavLink>
            <NavLink className={({ isActive})=>isActive ? "text-black font-bold": "text-grey"} to='instructors'>Instructors</NavLink>
            <NavLink className={({ isActive})=>isActive ? "text-black font-bold": "text-grey"} to="/events">Events</NavLink>
            <NavLink className={({ isActive})=>isActive ? "text-black font-bold": "text-grey"} to="/contact">Contact Us</NavLink>
        </div>
        <div className='ml-12 flex gap-4'>
            <button className='cursor-pointer' onClick={()=>{navigate('/login')}}>Login</button>
            <button onClick={()=>{navigate('/signup')}}  className='rounded-xl text-white bg-blue-500 py-1 px-3 border-none cursor-pointer'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
