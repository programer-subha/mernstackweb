const paymentvarification=(req,res,next)=>{
    if(req.query.isPayment){
        next()
    }
    else{
        res.status(400).send("invalid payment")
    }
}
module.exports=paymentvarification