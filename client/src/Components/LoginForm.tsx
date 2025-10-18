import {useState} from 'react'
import InputComponent from "./InputComponent"
import { MdOutlineEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useLogin } from '../Hook/useLogin';
function LoginForm() {
    const login =useLogin()
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const handleSumit = async(e:React.FormEvent) =>{
            e.preventDefault()
            const user = {
                email  , password 
            }
            await login( email, password); // ✅ use hook
            
           console.log(user)
        }
  return (
    <form onSubmit={handleSumit} className='w-full h-1/2 md:m-5 placeholder:font-bold placeholder:text-2xl  gap-5 md:h-2/3 md:w-1/2 flex  justify-evenly items-center flex-col  border-[#EEC181] border-[1.5px] rounded-4xl bg-white/30 backdrop-blur-sm p-5  '>
        <InputComponent
        value={email}
        onChange={(e)=>setEmail(e.target.value)} 
        type="email"
        icon={<MdOutlineEmail className='font-black text-2xl'/>}
        placeholder="Email"
        />
        <InputComponent
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        type="password"
        icon={<MdLock className='font-black text-2xl'/>}
        placeholder="Password"
        />
        <div className='flex justify-center items-center flex-col gap-5 '> 
            <button type="submit" className='px-5 py-2 bg-[#EEC181] rounded-3xl cursor-pointer '>Log In  </button>
            <p className='flex justify-center items-center flex-row font-bold  '>
            Don’t have an account? 
            <Link to="/signup">signup</Link>
            </p>
        </div>
    </form>
  )
}

export default LoginForm