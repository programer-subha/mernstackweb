const mongoose=require('mongoose')

const Dbconn=async()=>{
try {
     await  mongoose.connect("mongodb+srv://sumon:12345@cluster0.uvq2ysp.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0")
     console.log("connect to Database Sucessfully");
} catch (error) {
    console.log("Database connection failed");
}
}

module.exports=Dbconn