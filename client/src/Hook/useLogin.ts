import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuthStore from "../store/useUser";
export const useLogin =()=>{
    const navigate = useNavigate()
    const  setAuth = useAuthStore((state)=>state.setAuth)
    const login = async (email:string,password:string)=>{
        const user ={email  , password }
        try{
            const response = await axios.post("http://localhost:5000/auth/login", user)
            const data = response.data
            const userData = data.user
            const token = data.user.token
            setAuth(token,userData)
            // const  token = response.user.token
            console.log(data);
            // setAuth(token,user)
            toast.success(response.data.message)
            navigate("/score")
        }catch(err:any){
            console.log(err);
            toast.error(err.response?.data?.message || "Signup failed")
        }
    }
    return {login}
}