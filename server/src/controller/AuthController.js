import prisma from "../utils/db.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";
// signup controller
const signup = async(req, res) => {
    const {email , password , username } = req.body;
    // chack is all fields are present 
    if(!email || !password || !username){
        return res.status(400).send({message : "All fields are required"});
    }
    try {
      // check user is already present
      const existingUser= await prisma.user.findUnique({
        where:{email}
      })
      if(existingUser){
        return res.status(400).send({message : "User already exists"});
      }
      // hash the password
      const hashedPassword = await hashPassword(password);
      // create user
      const user = await prisma.user.create({
        data:{
          email,
          password : hashedPassword,
          username
        }
      })
      // generate token
      const token = generateToken({id : user.id , email : user.email});
      // send response
      res.status(201).send({
        message : "User created successfully",
        user:{
          id : user.id,
          email : user.email,
          username : user.username,
          token
        }
      })
    } catch (error) {
      res.status(500).send({message : "Something went wrong", error : error.message});
    }
}
// login controller
const login = (req, res) => {
  res.send("login route");
}
export { signup, login };