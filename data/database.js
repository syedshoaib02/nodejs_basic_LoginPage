import mongoose from "mongoose"


export const connectDB =()=>{
    mongoose.connect(process.env.MONGO_URI).then((c)=>{console.log(`server is coonected with ${c.connection.host}`)})
}