import express from "express"
import {getUserPoints, updateUserScore} from "../controller/GameController.js"
import authmiddleware from "../middleware/authmiddleware.js";
import  {GenerateQrcodes} from "../controller/QrcodeGeneratingController.js"
const router = express.Router()
// the get user point 
router.post("/userScore",getUserPoints)
// update the suer point 
router.post("/scan",updateUserScore)
// genereted qrcode 
router.post("/generated", GenerateQrcodes)
export default router 