const User = require("../model/user")

const addUser =async(req,res)=>{
    try {
        console.log(req.body);
        
        const user = new User(req.body);
        await user.save();
        return res.json({msg:"user added sucessfully",data:req.body})
    } catch (error) {
        res.status(500).json({msg:"internal server error ",error:error.massage})
    }
}
const GetUser =async(req,res)=>{}
const DeleteUser =async(req,res)=>{}
const UpdateUser =async(req,res)=>{}


module.exports={
    addUser,
    GetUser,
    DeleteUser,
    UpdateUser
}