import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

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