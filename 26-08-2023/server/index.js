require('dotenv').config()
const express = require('express');
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
//Routes
const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");
const cors = require('cors')

const connectToMongoDB = require("./db")

//Connecting to MongoDB
connectToMongoDB()

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.set('view engine', 'ejs')
app.set('views', './views')

//Auth Routes
app.use("/api/auth", authRoutes);

//Product Routes
app.use("/products", productsRoutes);

app.get('/', (_, res) => {
    res.render("index" , {error:false});
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});