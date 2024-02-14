import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('monogodb is connected');
}).catch(error=>{
    console.log(error);
});


const app = express();
         

app.listen(3000,()=>{
    console.log("app is running well")
});         
 

app.use('/api/user', userRoutes)