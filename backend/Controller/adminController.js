const express =require("express")
const router = express.Router()
const {admin} = require("../Models/adminSchema")
const {adminValidate} = require("../Models/ZOD/adminValidation")

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
    }
}
catch(err){
    console.log(err)
    res.status(500).json({message:"Internal Server Error"})
}

}

)



module.export = router