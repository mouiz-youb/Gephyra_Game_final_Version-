import React , {useState} from 'react'
import { useSignup } from '../Hook/useSignup'
import { useLogin } from '../Hook/useLogin'
import axios from 'axios'
import GameLogo from "../images/GameLogo.svg"
import BG from "../images/bg.png"
import "../index.css"
import SignForm from '../Components/SignForm'
import LoginForm from '../Components/LoginForm'
function Login() {
    // const login = useLogin()
    // const [username, setusername] = useState("")
    // const [email, setemail] = useState("")
    // const [password, setpassword] = useState("")
    // const handleSumit = async(e:React.FormEvent) =>{
    //     e.preventDefault()
    //     const user = {
    //         email , username , password 
    //     }
    //     await login( email, password); // ✅ use hook
        
       
    // }
  return (
    <div className=' w-full h-full flex flex-col justify-center items-center bg-[url("./images/AuthBg.svg")] md:bg-[url("./images/AuthBg2.svg")] bg-center bg-no-repeat bg-cover  '>
        <div className='p-5 w-full h-screen bg-[rgba(0,0,0,0.336)]  flex justify-start items-center flex-col   '>
            <div className='flex justify-start items-center flex-col w-full md:w-1/2 '>
                <img src={BG} alt="" className='w-[100px] h-[150px]'/>
                <h1 className='text-white text-3xl md:text-5xl mb-5'>Log In </h1>
            </div>
                <LoginForm/>
        </div>
    </div>
  )
}

export default Login
//  console.log(`response ${response.data.user}`)
//         console.log("Full response:", response.data);
//         console.log("Message:", response.data.message);
//         console.log("User:", response.data.user);
//         console.log("User ID:", response.data.user.id);
//         console.log("User Email:", response.data.user.email);
//         console.log("Token:", response.data.user.token);

{/* <form   onSubmit={handleSumit}    
        className=' p-2 border-[1px] border-black h-2/3 w-1/2 flex flex-col justify-between items-center gap-5 '>
            <h1 className='text-5xl'>Sign up Page </h1>
            <input 
            onChange={(e)=>setusername(e.target.value)}
            className='w-1/2 border-[1px] border-black py-1.5 rounded-xl px-3 text-xl' 
            placeholder='Enter Your Username ' 
            type="text" 
            />
            <input 
            onChange={(e)=>setemail(e.target.value)}
            className='w-1/2 border-[1px] border-black py-1.5 rounded-xl px-3 text-xl' 
            placeholder='Enter Your Email ' 
            type="email" 
            />
            <input 
            onChange={(e)=>setpassword(e.target.value)}
            className='w-1/2 border-[1px] border-black py-1.5 rounded-xl px-3 text-xl' 
            placeholder='Enter Your Password ' 
            type="password" 
            />
            <button type="submit"  className='bg-blue-200 w-1/2 py-1.5 rounded-xl cursor-pointer '>Signup</button>
        </form> */}