const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{type:String,required:true},
    brand: {type:String, required:true}, 
    color: {type:String, required:true},
    weight: {type:String, required:true}, 
    size: {type:String, required:true}, 
    quantity: {type:String, required:true},
    price: {type:Number, required:true},
},
    {timestamps: true}
);

const product =  mongoose.model('Product',productSchema);

module.exports = product;