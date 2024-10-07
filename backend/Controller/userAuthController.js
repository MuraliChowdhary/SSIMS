const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createUserValidation, signinValidation } = require("../Models/ZOD/userValidation");
const User = require("../Models/userSchema"); // Assuming you have a user schema
const JWT_SECRET = process.env.JWT_SECRET;

// // User Signup (StoreManager, SalesManager, etc.)
// exports.userSignup = async (req, res) => {
//   const { username, password, role } = req.body;
//   try {
//     // Validate user data (username, role)
//     const validation = createUserValidation.safeParse({ username, role });
//     if (!validation.success) {
//       return res.status(400).json(validation.error.issues);
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({ username, password: hashedPassword, role });
//     await newUser.save();

//     // Generate JWT
//     const token = jwt.sign({ username, role }, JWT_SECRET, { expiresIn: "1h" });

//     res.status(201).json({ message: "User registered successfully", token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
 
exports.userSignin = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    
    const validation = signinValidation.safeParse({ username, password, role });
    if (!validation.success) {
      return res.status(400).json(validation.error.issues);
    }

   
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
 
    if (user.role !== role) {
      return res.status(403).json({ message: "User not authorized for this role" });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
 
    const token = jwt.sign({ username, role }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.changepassword =  async (req, res) => {
    const { username, password, role } = req.body;
    try {
      
      const validateUser = signinValidation.safeParse({ username, role, password });
      if (!validateUser.success) {
        return res.status(400).json(validateUser.error.issues);
      }
   
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
   
      if (role !== user.role) {
        return res.status(403).json({ message: "User not authorized" });
      }
  
      
      const hashedPassword = await bcrypt.hash(password, 10);
  
       
      const updatedUser = await userModel.updateOne(
        { username },
        { $set: { role, password: hashedPassword } }
      );
  
      if (updatedUser.modifiedCount > 0) {
        res.status(200).json({ message: "User updated successfully" });
      } else {
        res.status(400).json({ message: "User update failed" });
      }
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  };