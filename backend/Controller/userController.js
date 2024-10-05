const express = require("express")
const router = express.Router();
const userModel = require("../Models/userSchema")
const {createUserValidation, signinValidation} = require("../Models/ZOD/userValidation")
const brcypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const JSONSECRET = process.env.JSONSECRET
router.post("/signin", async (req,res)=>{
    const {username,role,password} = req.body;
    try{
        const validateUser = createUserValidation.safeParse({
            username,
            role,
            password
        })
        if(!validateUser.success){
            return res.status(400).json(validateUser.error.issues)
            }
            
          const user = userModel.findOne({username});
          if(!user){
            return res.status(400).json({message: "User not found"})
            }
         

            if(role != user.role){
                 res.status(403).json({msg:"User not authenticated"})
            }

            const password = brcypt.compare(password,user.password)
            if(!password){
                return res.status(400).json({msg:"Invalid password"})
                }

                const token = jwt.sign({username},JSONSECRET);

                res.statue(200).json({msg:"User authenticated successfully",token:token})

    }
    catch(err){
        res.status(404).json({message:err.message})
    }
})









module.exports = router






