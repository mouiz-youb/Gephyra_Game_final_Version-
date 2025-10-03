import prisma from "../utils/db.js";
//  get user point
const getUserPoints = async(req,res)=>{
    // const userId = req.user?.id
    res.send("hello form the getuser points contoroller ")
}
// updateUserScore  contoroller 
const  updateUserScore =(req,res)=>{
    res.send("hello form the update user points contoroller")
}
export {getUserPoints, updateUserScore}