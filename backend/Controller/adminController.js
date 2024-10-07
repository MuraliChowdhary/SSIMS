const bcrypt = require("bcrypt");
const { createUserValidation } = require("../Models/ZOD/userValidation");
const User = require("../Models/userSchema");
 
exports.createUser = async (req, res) => {
  const { username, role } = req.body;
  try {
   
    const validation = userValidation.safeParse({ username, role });
    if (!validation.success) {
      return res.status(400).json(validation.error.issues);
    }

    
    const tempPassword = "Temp@666";
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    
    const newUser = new User({ username, role, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
