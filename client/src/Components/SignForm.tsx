import React from 'react'
import InputComponent from "./InputComponent"
import { FaUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { Link } from 'react-router-dom';
function SignForm() {
  return (
    <div className='w-full h-2/3 md:m-5 placeholder:font-bold placeholder:text-2xl  gap-5 md:h-2/3 md:w-1/2 flex  justify-evenly items-center flex-col  border-[#EEC181] border-[1.5px] rounded-[100px] bgForm p-5  '>
        <InputComponent 
        type="text"
        icon={<FaUser/>}
        placeholder="UserName"
        />
        <InputComponent 
        type="email"
        icon={<MdOutlineEmail/>}
        placeholder="Email"
        />
        <InputComponent 
        type="password"
        icon={<MdLock/>}
        placeholder="Password"
        />
        <div className='flex justify-center items-center flex-col gap-5 '> 
            <button type="submit" className='px-5 py-2 bg-[#EEC181] rounded-3xl cursor-pointer '>Sign up </button>
            <p className='flex justify-center items-center flex-row   '>
            Already have an account? 
            <Link to="/login">Login</Link>
            </p>
        </div>
    </div>
  )
}

export default SignForm