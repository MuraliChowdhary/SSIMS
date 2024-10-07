const express =require("express")
const router = express.Router()
const {products} = require("../Controller/productController")
router.post("/add",products);
// router.post("/add",products);
// router.post("/add",products);
// router.post("/add",products);

module.exports = router