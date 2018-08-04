const express = require('express');
const mongoose = require('mongoose');

const port = process.env.port || 5000;

//express
const app = express();

//mongodb
const db = require('./config/keys').MDBuri;
mongoose.connect(db).then(()=>{
    console.log("db connection successful!!");
}).catch(()=>{
    console.log("db connection failed..");
})

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>console.log(`Application runing on port ${port}`));
