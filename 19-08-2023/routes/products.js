const express = require('express')
const router = express.Router();
const products = require("../models/product")
const { addProduct } = require("../controllers/product")

router.get('/', (req, res) => {
    res.send(products);
});



router.get('/addProduct', (req, res) => {
    res.render("product", { products })
});

router.get('/:productId', (req, res) => {
    const productId = Number(req.params.productId);
    const product = products.find((p) => p.id === productId);
    if (product) {
        res.send(product);
    } else {
        res.send("Product Not Found");
    }
});

router.post('/', (req, res) => {
    addProduct(req.body);
    res.redirect("product/addProduct")
});


module.exports = router;
