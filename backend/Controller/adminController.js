const express =require("express")
const router = express.Router()
const {admin} = require("../Models/adminSchema")
const {adminValidate,userValidation} = require("../Models/ZOD/adminValidation")
const brcypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userSchema = require("../Models/userSchema")
const JWTSECRET = process.env.JWTSECRET;
router.post("/signup",(req,res)=>{
    const {username,password} = req.body;
     try{
  const validation = adminValidate.safeParse(
    {username,password}
  )
  
  if (!validation.success) {
    return res.status(400).json(validation.error.issues);

    }
    else{
        const admin = new admin({
            username,
            password
            })
            admin.save()
            .then(()=>consolr.log("Admin registered"))
            .catch((err)=>console.log(err))
            const token = jwt.sign({username},JWTSECRET)
            res.status(201).json({message:"Admin registered successfully",token:token})

    }
}
catch(err){
    console.log(err)
    res.status(500).json({message:"Internal Server Error"})
}

}

)

router.post("/createUser",(req,res)=>{
    const {username,role } = req.body;
    try{
  const validation  = userValidation.safeParse({
    username,
    role
  })
  if (!validation.success) {
    return res.status(400).json(validation.error.issues);
    } 
    const temp = "Temp@666"
    const hashedpass = brcypt.hash(temp,10);

     const newuser = userSchema({
        username,
        role,
        password:hashedpass
     })
     newuser.save()
     .then(()=>console.log("User created"))
     .catch((err)=>console.log(err))
     
}
catch(err)
{
    console.log(err)
}
}
)



module.export = router