const express = require("express");
const authenticate = require("../middlewares/authenticate")
const router = express.Router();
const Product = require("../models/Product")

router.get('/', authenticate, (req, res) => {
    const allProduct = Product.find();
    return res.send(allProduct);
});

module.exports = router;