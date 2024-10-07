const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productID: {
    type: String, 
    required: true, 
    unique: true
  },
  name: {
    type: String, 
    required: true
  },
  description: {
    type: String
  },
  category: {
    type: String, 
    required: true
  },
  brand: {
    type: String
  },
  price: {
    type: Number, 
    required: true
  },
  quantity:{
    type: Number,
    required: true
    },
  unitOfMeasure: {
    type: String, 
    required: true,
    enum: ['kg', 'litre', 'piece','pack','set']
  },
  barcode: {
    type: String, 
    required: true
  },
  currentStockQuantity: {
    type: Number, 
    required: true
  },
  minimumStockLevel: {
    type: Number, 
    required: true
  },
  expirationDate: {
    type: Date
  },
  supplierInformation: {
    name: String,
    contact: String
  },
  locationInStore: {
    aisle: String,
    shelf: String
  },
  nutritionalInformation: {
    type: String
  },
  allergenInformation: {
    type: String
  },
  taxRate: {
    type: Number
  },
  discountInformation: {
    discountType: {
      type: String,
      enum: ['percentage', 'fixed']
    },
    discountValue: {
      type: Number
    }
  },
  imageUrl: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
