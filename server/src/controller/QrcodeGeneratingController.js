import {v4 as uuidv4 } from "uuid"
import prisma from "../utils/db.js"

// range of the points 
const POINTS_RANGE =  [-30, -20, -10, -5, 0, 5, 10, 20, 30];
// helper to get  random points
const getRandomPoints = ()=>{
    const index = Math.floor(Math.random()*POINTS_RANGE.length)
    return POINTS_RANGE[index]
}
// Generate 50 qrcode 
export const GenerateQrcodes=async(req,res)=>{
    try {
        await prisma.qrcode.deleteMany()
        // created a new qrcode 
        const  newQrcode = Array.from({length:50}, ()=>({
            code :uuidv4(),
           currentValue: POINTS_RANGE[Math.floor(Math.random() * POINTS_RANGE.length)],
        }))
        await prisma.qrcode.createMany({data:newQrcode})
        const savedQrcode = await prisma.qrcode.findMany()
        res.status(201).json({
            msg:"50 qrcode created successfylly ",
            savedQrcode
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:"Error generating QRcode "
        })
    }
}