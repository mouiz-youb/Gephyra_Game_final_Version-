import  { type ReactNode } from 'react'
import "../index.css"
interface InputProps{
  placeholder:string, 
  type:string, 
  icon :ReactNode
   value: string; // Added value to control the input from the parent
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputComponent: React.FC<InputProps>=({placeholder , type , icon ,onChange , value })=> {
  return (
    <div className='flex font-bold justify-center items-center flex-row w-full md:w-2/3 px-5 border-b-2     '>
      <input 
      className='bg-transparent w-full px-3 py-2.5 focus2 font-semibold placeholder:font-bold placeholder:text-xl placeholder:text-black ' 
      type={type} 
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      />
      {icon}
    </div>
  )
}

export default InputComponent