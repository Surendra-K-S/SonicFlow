import mongoose from "mongoose";

const connectDB = async () =>{
    mongoose.connection.on('connected',()=>{  
        console.log("Connection established"); //when connection established we get this message
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/sonicflow`);
}
export default connectDB;