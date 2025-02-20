import mongoose from "mongoose";
let doctorScheama=new mongoose.Schema({
    name:{
        type:String
    },
    workingHours:{
        start:Number,
        end:Number
    },
    booked: {
        type: Map,
        of: [String], // Each key (date) will have an array of time slots
        default: {}
    }

})
let DoctorModel=mongoose.model("doctors",doctorScheama)
export {DoctorModel}