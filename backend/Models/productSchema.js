const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false // make required false if you want to allow null
  },
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: false // make required false if you want to allow null
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unitOfMeasure: {
    type: String,
    required: true,
    enum: ['kg', 'litre', 'piece', 'pack', 'set']
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
    type: Date,
    required: false // make required false if you want to allow null
  },
  supplierInformation: {
    name: {
      type: String,
      required: false // make required false if you want to allow null
    },
    contact: {
      type: String,
      required: false // make required false if you want to allow null
    }
  },
  locationInStore: {
    aisle: {
      type: String,
      required: false // make required false if you want to allow null
    },
    shelf: {
      type: String,
      required: false // make required false if you want to allow null
    }
  },
  nutritionalInformation: {
    type: String,
    required: false // make required false if you want to allow null
  },
  allergenInformation: {
    type: String,
    required: false // make required false if you want to allow null
  },
  taxRate: {
    type: Number,
    required: false // make required false if you want to allow null
  },
  discountInformation: {
    discountType: {
      type: String,
      enum: ['percentage', 'fixed'],
      required: false // make required false if you want to allow null
    },
    discountValue: {
      type: Number,
      required: false // make required false if you want to allow null
    }
  },
  imageUrl: {
    type: String,
    required: false // make required false if you want to allow null
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
