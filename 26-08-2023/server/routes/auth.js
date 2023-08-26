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
    })
    if (createdUser) {
        const userData = {
            user: createdUser.name,
            email: createdUser.email,
            _id: createdUser._id
        }
        const token = jwt.sign({
            data: userData
        }, process.env.JWT_SECRECT_KEY);
        if (token) {
            res.cookie('user', token, { httpOnly: true });
            res.send({
                user:userData,
                token:token
            });
        } else {
            res.status(500).send({ error: "Internal Error" })
        }
    } else {
        res.status(500).send({ error: "Internal Error" })
    }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(req.body, user);
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
            res.send({
                user,
                token:token
            });
        } else {
            res.status(401).send({ error: "Invalid Credentials" })
        }
    } else {
        res.status(401).send({ error: "Invalid Credentials" })
    }
});

router.get('/getUser', async (req, res) => {
    if (req.headers.authorization) {
        const user = jwt.verify(req.headers.authorization, process.env.JWT_SECRECT_KEY);
       if (user?.data._id) {
            res.send(user.data);
        } else {
            res.status(401).send({ error: "Unauthorized" })
        }
    } else {
        res.status(401).send({ error: "Unauthorized" })
    }
});


module.exports = router;