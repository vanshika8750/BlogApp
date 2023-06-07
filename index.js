const express=require('express');
const app=express();
require('dotenv').config();
const port=process.env.PORT||5000;

app.use(express.json());

const blog=require("./routes/blog");
app.use("/api/v1",blog);

const dbConnect=require('./config/database');
dbConnect();

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})

app.get('/',(req,res)=>{
    res.send("Homrepagde");
})