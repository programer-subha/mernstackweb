// const http=require("http")
// const server =http.createServer(
//     (req,res)=>{
//         if(req.url=="/"){
//             res.end("Hello welcome to our first node server service page")
//         }
//         else if(req.url=="/login")
//         {
//             res.end("You are log in")

//         }
//         else if(req.url=="/contact")
//         {
//             res.end("you are in contact page")
//         }
//     }
// )
// server.listen(4000,()=>{
//     console.log("server is runing on port 4000")
//     console.log("server is run")
// })





// const express=require("express")
// const app=express()

// app.use("/my-images",express.static('public'))

// const userData=[
//     {id:1,name:"john",age:25},
//     {id:2,name:"jene",age:30},
//     {id:3,name:"bob",age:35}
// ]
 
// function coursepaymentmiddleware(req, res, next){
//   if(req.query.amount == "3500"){
//     next()
//   }
//   else{
//     res.status(401).send("User Unauthorized")
//   }
// }
// function paymentscreenshortmidlleware(req,res,next){
//  if(req.query.ss=="ok"){
//   next()
//  }
//  else{
//   res.status(401).send("ss is not Given")
//  }
// }
// app.get("/course",coursepaymentmiddleware,(req,res)=>{
//     res.send("course acess sucessful")
// })
// app.get("/course/certificate/:name",paymentscreenshortmidlleware,coursepaymentmiddleware,(req,res)=>{
//     res.send(`congulations to ${req.params.name} get your certificate`)
// })
// app.get("/",(req,res)=>
// {
//   res.send("Hello world")
// })
// app.get("/service",(req,res)=>{
//     res.send("Hello this is somnath service")
// })
// app.get("/acessdata",(req,res)=>{
//     res.json(userData)
// })
// app.get("/profile/:username/:password",(req,res)=>{
//     res.send(`This is ${req.params.username} and password ${req.params.password} profile`)
// })

// app.listen(4000,()=>{
//     console.log("server is runing on localhost.4000")
// })

const express =require("express")
const baseRouter=require("./src/router/baseRouter")
const  paymentvarification=require("./src/middleware/paymentMiddleware")
const path=require('path')

const Dbconn=require("./db/dbconn")
const userRouter=require("./src/router/userRouter")
const app=express()

app.use(express.json())
app.use("/scrinshorts",paymentvarification,express.static("public"))
//app.get("/",)

app.use(baseRouter)
app.use(userRouter)
app.get("/profile/:name/:age",paymentvarification,(req,res)=>
{
    res.send("Hello  "+req.params.name+"  age is "+req.params.age)
})

Dbconn().then(()=>{
app.listen(4000,()=>{
    console.log("server is runing on http://localhost:4000/")
})
})
