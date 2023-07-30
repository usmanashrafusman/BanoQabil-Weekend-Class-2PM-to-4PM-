const express = require('express');
const path = require("path");
const bodyParser = require("body-parser")
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, "views", "index.html")
    res.sendFile(htmlPath)
});

app.post('/', (req, res) => {
    const { email, password } = req.body;
    fs.readFile("users.json", "utf8", (err, users) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        const user = JSON.parse(users).find((user) => user.email === email && user.password === Number(password))
        console.log(user);
        if (user) {
            res.send("Welcome")
        } else {
            res.send("Invalid Creds")
        }
    });
});



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});