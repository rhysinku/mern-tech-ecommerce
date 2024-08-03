import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";


dotenv.config();

const app = express();
const port = 6969; 

app.get('/', (req, res)=>{
    res.status(200).send('Hello World!');
})

app.listen(port!, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})

// console.log(process.env.MONGO_APPLICATION_CODE)

mongoose.connect(process.env.MONGO_APPLICATION_CODE!, )  .then(() => {
    console.log("Mongo Connected From Server");
  }).catch((e) => console.log(e));
