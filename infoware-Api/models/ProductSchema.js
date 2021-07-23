const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:4,
        maxlength:20
    },
    description:{
        type:String,
        required:true,
        minlength:10,
        maxlength:250
    },
    price:{
        type: Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true
    },
    imagrUrl:{
        type:String
    }
})


const Product = mongoose.model('product',ProductSchema);

module.exports = Product;