const Todo=require('../models/Todo');


exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"data retrived successfully"
            }
        )
    }catch(err){
        res.status(400).json(
            {
                success:true,
                data:err,
                message:"failed"
            }
        )
    }
}