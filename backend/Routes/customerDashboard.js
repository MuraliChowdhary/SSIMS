const express = require("express")
const router = express.Router();
const {getItemsBasedonCategory,getItem} = require("../Controller/CustomerController")

router.get("/getItems",getItemsBasedonCategory);

router.get("/getItem",getItem);





module.exports = router