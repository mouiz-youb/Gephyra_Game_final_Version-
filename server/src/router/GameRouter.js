import express from "express"
import {getUserPoints, updateUserScore} from "../controller/GameController.js"
const router = express.Router()
// the get user point 
router.get("/userScore",getUserPoints)
// update the suer point 
router.post("/scan",updateUserScore)
export default router 