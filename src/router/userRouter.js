const express=require('express');
const userControler=require("../controller/userControler");
const router=express.Router();

router.post("/adduser",userControler.addUser)


module.exports=router
