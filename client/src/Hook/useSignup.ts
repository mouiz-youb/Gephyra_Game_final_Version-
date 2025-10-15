import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuthStore  from "../store/useUser";
export const useSignup =()=>{
    const  setAuth = useAuthStore((state)=>state.setAuth)

    const navigate = useNavigate()
    const signup = async (username:string,email:string,password:string)=>{
        const user ={email , username , password }
        try{
            const response = await axios.post("http://localhost:5000/auth/signup", user)
            const data = response.data
            const userData = data.user
            const token = data.user.token 
            setAuth(token, userData)
            // const  token = response.user.token
            console.log();
            // setAuth(token,user)
            toast.success(response.data.message)
            navigate("/score")
        }catch(err:any){
            console.log(err);
            toast.error(err.response?.data?.message || "Signup failed")
        }
    }
    return signup
}