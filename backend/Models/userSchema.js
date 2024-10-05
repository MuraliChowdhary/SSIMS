const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },  
    role: {
        type: String,
        enum: ['admin', 'store_manager', 'cashier','salesmanager'],
        required: true
    },
    password: {
        type: String,  // Password will be provided later or generated during user creation
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('User', userSchema);
