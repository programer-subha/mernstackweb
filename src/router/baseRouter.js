const express=require("express")
const router=express.Router()
const {exampleApi,showAlluser}=require("../controller/baseController")
const paymentvarification=require("../middleware/paymentMiddleware")

router.get("/",paymentvarification,exampleApi)
router.get("/getall-user",showAlluser)
module.exports=router
