const express = require("express")
const app = express()
const port =3002
const mongoose  =require("mongoose")
const cors  = require("cors")

const routes = require("./Routes/index")
mongoose.connect(`mongodb://localhost:27017/SSIMS`)
.then(()=>console.log("Database Connected Sucessfully"))
.catch((err)=>console.log("Error in connecting database",err))
app.use(express.json())
app.use(cors())


app.use("/api/v1",routes)


app.listen(port,function(){
    console.log("server is running on port 3002")
   
})

