import express from "express"
import { DoctorModel } from "../models/doctor.model.js"
let doctorRoutes=express.Router()
doctorRoutes.get("/",async(req,res)=>{
    try{
   let doctorList=await DoctorModel.find({})
   return res.status(200).json({data:doctorList})
    }
    catch(e)
    {
    return res.status(400).json({msg:"error occured"})
    }
})
export {doctorRoutes}