import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from "cookie-parser";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('monogodb is connected');
}).catch(error=>{
    console.log(error);
});


const app = express();
app.use(cookieParser());
app.use(express.json());

app.listen(3000,()=>{
    console.log("app is running well")
});         
 

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)


app.use((error , req , res , next)=>{
    const statuscode = error.statuscode || '400';
    const message = error.message || 'Internal Server Error'
    res.status(statuscode).json({
        sucess: false,
        statuscode,
        message,
    });
}
)


