import prisma from "../utils/db.js";
//  get user point
const getUserPoints = async(req,res)=>{
    // const userId = req.user?.id
    const userId = req.body?.id
    if(!userId){
        return res.status(401).send({
            msg:"Not authenticated "
        })
    }
    try {
        const user = await prisma.user.findUnique({
            where:{id :userId},
            select:{points :true}
        })
        if(!user){
             return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({
            msg:"User score fetched seccessfully hiiiiiiiiiiiiiiiii ",
            score :user.points
        })
    } catch (error) {
        console.log(erorr)
            res.status(500).send({ message: "Error fetching score", error: error.message });
    }
}
// updateUserScore  contoroller 
const  updateUserScore =(req,res)=>{
    res.send("hello form the update user points contoroller")
}
export {getUserPoints, updateUserScore}