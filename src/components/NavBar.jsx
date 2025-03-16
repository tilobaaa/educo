import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center px-36 justify-between'>
      {/* left side */}
      <div className='flex items-center'>
        <h1 className='text-3xl '>Educo</h1>
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
            <button>Login</button>
            <button className='rounded-xl text-white bg-blue-500 py-1 px-3 border-none'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
