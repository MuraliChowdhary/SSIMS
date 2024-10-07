  const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { admin,validateUser } = require("../Models/ZOD/adminValidation");
const Admin = require("../Models/adminSchema");
const JWT_SECRET = process.env.JWT_SECRET;
 
exports.signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    
    const validation = admin.safeParse({ username, password });
    if (!validation.success) {
      return res.status(400).json(validation.error.issues);
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);
 
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();
 
    const token = jwt.sign({ username }, JWT_SECRET);
    res.status(201).json({ message: "Admin registered successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
 
exports.signin = async (req, res) => {
  const { username, password } = req.body;
  try {
    
    const validation = admin.safeParse({ username, password });
    if (!validation.success) {
      return res.status(400).json(validation.error.issues);
    }
 
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
 
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
 
    const token = jwt.sign({ username }, JWT_SECRET,
        { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Admin logged in successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
