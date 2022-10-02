import express from "express";
import dotenv from 'dotenv';
import router from "./routes/route";
import bodyParser from "body-parser"
import mongoose from "mongoose";


dotenv.config();
const app = express();


// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=>{
    console.log('DB connected')
})

app.use('/api',router)

app.listen(process.env.APP_PORT || 3000, ()=>{
    console.log('server started...')
})