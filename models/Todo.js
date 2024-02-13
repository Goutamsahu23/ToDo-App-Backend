const mongoose=require('mongoose')

const todoSchema=mongoose.Schema(
    {
        title:{
            type:String,
            requied:true,
        },
        description:{
            type:String,
            require:true,
        },
        createdAt:{
            type:Date,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            default:Date.now(),
        },


    }
)

module.exports=mongoose.model('Todo',todoSchema);