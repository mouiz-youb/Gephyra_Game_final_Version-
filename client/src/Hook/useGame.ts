import axios from "axios";
import { toast } from "react-hot-toast";
import useGameStore from "../store/GameStore";

const API_URL= "http://localhost:5000/"

export const useGame = ()=>{
     const { qrCodes, setQRCodes } = useGameStore();
     const fetchQRcode = async()=>{
        try {
            const response = await axios.post("http://localhost:5000/game/generated");
            setQRCodes(response.data.savedQrcode);
            console.log(response.data.savedQrcode)
            toast.success(response.data.msg)
        } catch (error) {
             toast.error("Failed to fetch QR codes");
        }
     }
     return{fetchQRcode , qrCodes}
}