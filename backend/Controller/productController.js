const mongoose = require("mongoose");
const Product = require("../Models/productSchema");

exports.products = async (req, res) => {
  const productData = req.body;

  try {
    const product = new Product(productData);
    console.log(product);
    await product.save();
    console.log("Done");
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.error("Error inserting product:", error.message);
    res.status(500).json({
      message: "Error inserting product",
      error,
    });
  }
};

exports.getAllProducts = async (req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
        
    }
    catch(err){
        console.error("Error fetching products:", err.message);
        res.status(500).json({message: "Error fetching products", error: err});
        
    }
}

exports.getItem = async (req, res) => {
  const id = req.query.id;
  console.log(id);
  try {
    const product = await Product.findOne({
      productId: id,
    });
    if (!product) {
      return res.status(500).json({
        message: "Product not found",
      });
    }
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "server error",
    });
  }
};

exports.updateProduct = async (req, res) => {
  const product = req.body;
  try {
    const productId = product.productId;

    const updatedProduct = await Product.findOneAndUpdate(
      { productId: productId },
      product,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await Product.findOneAndDelete({
      productId: productId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res
      .status(200)
      .json({ msg: "Product deleted successfully", deletedProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
