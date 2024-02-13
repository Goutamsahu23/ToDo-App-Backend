const mongoose=require('mongoose');
require('dotenv').config();


const dbConnect=()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{console.log("db connected")})
}

module.exports=dbConnect;