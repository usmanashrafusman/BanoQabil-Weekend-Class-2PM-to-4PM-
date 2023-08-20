require('dotenv').config()
const express = require('express');
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
//Routes
const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");


const connectToMongoDB = require("./db")

const app = express();
const PORT = 3000;

//Connecting to MongoDB
connectToMongoDB()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

//Auth Routes
app.use("/", authRoutes);

//Product Routes
app.use("/products", productsRoutes);

app.get('/', (_, res) => {
    res.render("index" , {error:false});
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});