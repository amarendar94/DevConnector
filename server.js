const express = require('express');
const mongoose = require('mongoose');

const port = process.env.port || 5000;

//express
const app = express();

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//mongodb
const db = require('./config/keys').mongoURI;
mongoose.connect(db).then(()=>{
    console.log("db connection successful!!");
}).catch(()=>{
    console.log("db connection failed..");
})

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>console.log(`Application runing on port ${port}`));
