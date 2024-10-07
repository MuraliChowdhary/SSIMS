const express  =require("express")
const router = express.Router()
const productSchema = require("../Models/productSchema")


exports.products = async (req,res) =>{
    const product= req.body.products;
     console.log(product)
    try{
        const productsData = await productSchema.insertMany(product)
        if(productsData){
            res.status(201).json({message:"products added successfully"})
        }
        else{
            res.status(400).json({message:"products not added"})
        }
        
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}