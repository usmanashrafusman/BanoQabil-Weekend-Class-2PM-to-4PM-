const mongoose = require("mongoose");
const { Schema } = mongoose;

// creating a schema to add product data in db
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;