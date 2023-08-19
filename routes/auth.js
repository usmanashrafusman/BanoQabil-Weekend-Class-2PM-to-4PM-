const express = require("express");
const User = require("../models/User")
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render("signup");
});

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const createdUser = await User.create({
        name,
        email,
        password
    });
    res.redirect("/")
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(user){
        if(user.password === password){
            res.send("Welcome")
        }else {
            res.send("Invalid Creds")
        }
    }else {
        res.send("Don't have account with this email")
    }
});


module.exports = router;
