import express from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const port = process.env.PORT || 6969; 



app.get('/', (req, res)=>{
    res.status(200).send('Hello World!');
})




mongoose.connect(process.env.MONGO_APPLICATION_CODE!).then(()=>{
    console.log("Connected to MongoDB");
    // app.listen(port!, ()=>{
    //      console.log(`Server is running on port http://localhost:${port}`);
    // }) 
}).catch(console.error)