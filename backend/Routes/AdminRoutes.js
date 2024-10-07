const express = require("express");
const router = express.Router();
const { createUser } = require("../Controller/adminController");
const authMiddleware = require("../Middleware/authMiddleware");

router.post("/createUser", authMiddleware, createUser);

module.exports = router;
