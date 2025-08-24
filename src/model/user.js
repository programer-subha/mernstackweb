// const userData = [
//     {
//         name: "Gurudev",
//         age: 22,
//         collage: "Brainware"
//     },
//     {
//         name: "ishan", 
//         age: 23,
//         collage: "Brainware"
//     },
//     {
//         name: "Avisheak", 
//         age: 22, 
//         collage: "Brainware"
//     },
//     {
//         name: "Susmita",
//         age: 22,
//          collage: "Brainware"
//     },

// ]
// module.exports=userData

const mongoose=require("mongoose")
const usershecma=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
}

)

const User=mongoose.model("User",usershecma)
module.exports=User;