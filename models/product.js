const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
       type: String,
       required:true
    },
    brand: { 
    type: String,
    },
    description:String,
    price: {
       type: Number,    
        required: true     
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
      url: String,
      filename: String,  
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

