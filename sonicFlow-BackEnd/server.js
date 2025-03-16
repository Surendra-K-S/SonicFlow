import express from 'express'
import cors from 'cors'
import'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';

//app config
const app = express();
const port = process.env.PORT || 4000; //if port is not defined use 4000 as port number
connectDB(); //to call connectDB
connectCloudinary() //to connect cloudinary

//middlewares
app.use(express.json()); //when ever we get requset it helps to parse
app.use(cors()); //it helps to connect frontend with backend (if frontend is ruuning another port number and backend is running on another port number then cors helps to connect)

//initializing routes
app.use("/api/song",songRouter);

app.get('/',(req,res)=> res.send("API Working"));

app.listen(port,()=> console.log(`Server started on ${port}`)); //to start express app