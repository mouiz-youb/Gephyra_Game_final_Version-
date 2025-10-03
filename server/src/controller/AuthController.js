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
          token, 
          points :user.points
        }
      })
    } catch (error) {
      res.status(500).send({message : "Something went wrong", error : error.message});
    }
}
// login controller
const login = async(req, res) => {
  const {email , password} = req.body
  // chack is all fields are present
  if(!email || !password){
      return res.status(400).send({message : "All fields are required"});
  }
  try {
    // check user is exist
    const UserExist = await prisma.user.findUnique({
      where : {email}
    })
    if(!UserExist){
      return res.status(400).send({message : "Signup first, User not found"});
    }
    // compare password 
    const isPasswordValid = await comparePassword(password, UserExist.password);
    if(!isPasswordValid){
      return res.status(400).send({message : "Password is incorrect Try again"});
    }
    // generate token
    const token = generateToken({id : UserExist.id , email : UserExist.email});
    // send response 
    res.status(200).send({
      message : "Login successful",
      user:{
        id : UserExist.id,
        email : UserExist.email,
        username : UserExist.username,
        token , 
        points :UserExist.points
      }
    })
  } catch (error) {
    res.status(500).send({message : "Something went wrong Try again ", error : error.message});
  }
}
export { signup, login };