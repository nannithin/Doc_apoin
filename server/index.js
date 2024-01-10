import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import allRoutes from "./routes/index.js";
import cors from 'cors';

const app = express()
const PORT = "port";
const MONGOO_URI = "your uri"

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["your origin"],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true
}))

app.use('/api',allRoutes);

const mongooconect = async () => {
    try {
        await mongoose.connect(MONGOO_URI);
        console.log("DB CONNECTED")
    } catch (error) {
        console.log(error)
    }
}

app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`)
    mongooconect();
})
