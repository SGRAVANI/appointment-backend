import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./util/utility.js"
import { doctorRoutes } from "./routes/doctor.route.js"
dotenv.config()
let app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    
}))
app.use("/doctor",doctorRoutes)
app.use((err,req,res,next)=>
{
    if(err)
    {
  return res.status(500).json({msg:"internal server error"})
    }
})
app.listen(3000,async()=>{
    console.log("server is listening on port 3000")
    await connectDB()
})