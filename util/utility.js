import mongoose from "mongoose";
async function connectDB() {
    try
    {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected")
      }
      catch(e)
      {
        console.log("error occured in connection")
      }

    
   
}
export {connectDB};