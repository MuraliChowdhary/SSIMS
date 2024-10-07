const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
function authMiddleware(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });
  } else {
    try {
      const tokenvalidation = token.split(" ")[1];
      const decoded = jwt.verify(tokenvalidation, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(503).json({
        message: "Access denied. Invalid token.",
      });
    }
  }
}




module.exports = authMiddleware;