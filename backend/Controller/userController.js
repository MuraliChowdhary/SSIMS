const express = require("express")
const router = express.Router();
const userModel = require("../Models/userSchema")
const {createUserValidation, signinValidation} = require("../Models/ZOD/userValidation")


router.post("/signin",(req,res)=>{
    const {email,password} = req.body;
    try{
        const validateUser = createUserValidation.safeParse({
            email,
            password
        })
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
})









module.exports = router






