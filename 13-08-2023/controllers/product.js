const products = require("../models/product");

const addProduct = (product) => {
    const id = product.length + 1;
    const { title, unit } = product;
    const quantity = Number(product.quantity)
    const newProduct = { title, unit, id, quantity };
    products.push(newProduct);
    return newProduct;
}



module.exports = { addProduct };
