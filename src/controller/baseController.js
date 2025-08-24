const UserData=require("../model/user")
const exampleApi=(req,res)=>{
    res.send("Hello World")
}
const showAlluser=(req,res)=>{
    if(req){
        return res.status(200).json({data:UserData,msg:'Data Fatch sucessfully'})
    }
}

module.exports={
    exampleApi,
    showAlluser
        //namining export
}


