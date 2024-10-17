const express =require("express")
const router = express.Router()
const {products, getItem, updateProduct, deleteProduct, getAllProducts} = require("../Controller/productController")
router.post("/add",products);
router.get("/getProducts",getAllProducts)



router.get("/getItem",getItem);
router.put("/updateProduct",updateProduct);
router.delete("/removeProduct",deleteProduct);

module.exports = router