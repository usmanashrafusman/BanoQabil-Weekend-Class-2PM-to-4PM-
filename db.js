const mongoose = require("mongoose")
const mongoDB_URI = "mongodb+srv://usmanashrafbanoqabil:BanoQabil@cluster0.zdskhkm.mongodb.net/"
const connectToMongoDB = () => {
    mongoose.connect(mongoDB_URI).then(() => {
        console.log("Connected to MongoDB")
    }).catch(() => {
        console.error("Connection Failed!")
    })
};

module.exports = connectToMongoDB;