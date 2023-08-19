const express = require('express');
const path = require("path");
const bodyParser = require("body-parser")
const fs = require("fs");
const productRoutes = require("./routes/products")
const connectToMongoDB = require("./db")
const authRoutes = require("./routes/auth");
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs')
app.set('views', './views')
connectToMongoDB()
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.render("index");
});

app.post('/', (req, res) => {
    res.render("index");
});

app.use("/" , authRoutes);

// app.use("/product" , productRoutes);

// app.post('/', (req, res) => {
//     const { email, password } = req.body;
//     fs.readFile("users.json", "utf8", (err, users) => {
//         if (err) {
//             console.log("File read failed:", err);
//             return;
//         }
//         const user = JSON.parse(users).find((user) => user.email === email && user.password === Number(password))
//         console.log(user);
//         if (user) {
//             res.send("Welcome")
//         } else {
//             res.send("Invalid Creds")
//         }
//     });
// });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});