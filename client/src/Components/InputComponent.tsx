import React, { type ReactNode } from 'react'
import "../index.css"
interface InputProps{
  placeholder:string, 
  type:string, 
  icon :ReactNode
}
const InputComponent: React.FC<InputProps>=({placeholder , type , icon})=> {
  return (
    <div className='flex font-bold justify-center items-center flex-row w-full md:w-2/3 px-5 border-b-2     '>
      <input className='  bg-transparent w-full px-3 py-2.5 focus2 font-semibold placeholder:font-bold placeholder:text-xl placeholder:text-black ' type={type} placeholder={placeholder} />
      {icon}
    </div>
  )
}

export default InputComponent