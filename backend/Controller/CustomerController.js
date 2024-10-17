const express = require("express");
const router = express.Router();
const productSchema = require("../Models/productSchema");

exports.getItemsBasedonCategory = async (req, res) => {
  console.log("Products");
  try {
    const items = await productSchema.find();
    console.log(items);
    res.status(200).json({
      success: true,
      message: "Items fetched successfully",
      products: items,
    });
  } catch (err) {
    console.log("In catch");
    res.status(500).json({
      success: false,
      message: "Error fetching items",
      error: err.message,
    });
  }
};

exports.getItem = async (req, res) => {
  const { id } = req.query;
  console.log(id);
  try {
    const Item = await productSchema.findById(id);
    if (!Item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Item fetched successfully",
      product: Item,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Error fetching item",
    });
  }
};
