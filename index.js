const express=require('express');
const app=express();
require('dotenv').config();

const PORT=process.env.PORT || 4000


app.use(express.json())

const todoRouts=require('./routes/todos');
app.use("/api/v1",todoRouts);

app.get('/',(req,res)=>{
    res.send("<h1>hello</h1>")
})

const dbConnect=require('./config/db');
dbConnect();

app.listen(PORT,()=>{
    console.log("app is runnign on port")
})
