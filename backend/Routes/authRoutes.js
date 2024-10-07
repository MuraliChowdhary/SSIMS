const express = require("express");
const router = express.Router();

 
const { signup, signin } = require("../Controller/adminAuthController");
const { userSignin,changepassword } = require("../Controller/userAuthController");

 
router.post("/admin/signup", signup);
router.post("/admin/signin", signin);
 
 
router.post("/signin", userSignin);
router.post("/cp",changepassword);
module.exports = router;
