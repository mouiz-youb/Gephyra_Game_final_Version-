import React , {useState} from 'react'
import { useLogin } from '../Hook/useLogin'

function Login() {
    const {login} = useLogin()
        const [email, setemail] = useState("")
        const [password, setpassword] = useState("")
        const handleSumit = async(e:React.FormEvent) =>{
            e.preventDefault()
            const user = {
                email  , password 
            }
            await login( email, password); // ✅ use hook
        }
  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center gap-5 '>
        <form   onSubmit={handleSumit}    
        className=' p-2 border-[1px] border-black h-2/3 w-1/2 flex flex-col justify-between items-center gap-5 '>
            <h1 className='text-5xl'>Login Page </h1>
            
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
            <button type="submit"  className='bg-blue-200 w-1/2 py-1.5 rounded-xl cursor-pointer '>Login</button>
        </form>
    </div>
  )
}

export default Login