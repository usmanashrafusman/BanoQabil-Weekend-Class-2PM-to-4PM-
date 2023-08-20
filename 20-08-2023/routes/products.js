const express = require("express");
const authenticate = require("../middlewares/authenticate")
const router = express.Router();

router.get('/', authenticate, (req, res) => {
    res.send("HELLO")
})

module.exports = router;