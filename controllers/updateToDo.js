const Todo=require('../models/Todo');

exports.updateTodo=async(req,res)=>{
    try{
        const id=req.params.id;
        const {title,description}=req.body;
        const response=await Todo.findByIdAndUpdate(
            {_id:id},
            {
                title:title,
                description:description,
                updatedAt:Date.now()
            },
            { new: true })

            res.status(200).json({
                success:true,
                data:response,
                message:"data updated successfully."
            })
    
    }catch(err){
        console.error(err);
        res.status(400)
        .json({
            success:false,
            message:err.message
        })
    }
}