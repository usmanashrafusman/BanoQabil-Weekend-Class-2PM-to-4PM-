const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/User")
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render("signup");
});

router.post('/signup', async (req, res) => {
    const { name, email } = req.body;
    const password = bcrypt.hashSync(req.body.password, 12);
    const createdUser = await User.create({
        name,
        email,
        password
    });
    res.redirect("/")
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (isValidPassword) {
            const token = jwt.sign({
                data: {
                    user: user.name,
                    email: user.email,
                    _id: user._id
                }
            }, process.env.JWT_SECRECT_KEY);
            res.cookie('user', token, { httpOnly: true });
            res.render("home")
        } else {
            res.render("index", { error: true, message: "Incorrect Password" })
        }
    } else {
        res.render("index", { error: true, message: "Don't have account with this email" })
    }
});


module.exports = router;