const express = require("express");
const userModel = require("../Models/userSchema");
const { signinValidation } = require("../Models/ZOD/userValidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JSONSECRET = process.env.JWTSECRET;
 
exports.signin = async (req, res) => {
  const { username, role, password } = req.body;
  try {
    
    const validateUser = signinValidation.safeParse({ username, role, password });
    if (!validateUser.success) {
      return res.status(400).json(validateUser.error.issues);
    }

   
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

     
    if (role !== user.role) {
      return res.status(403).json({ message: "User not authorized" });
    }
 
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    
    const token = jwt.sign({ username, role: user.role }, JSONSECRET, { expiresIn: '1h' });

    res.status(200).json({ message: "User authenticated successfully", token });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

 


 
