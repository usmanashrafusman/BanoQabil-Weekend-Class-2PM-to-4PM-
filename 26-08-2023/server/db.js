const mongoose = require("mongoose");

const connectToMongoDB = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Connected to MongoDB")
    }).catch(() => {
        console.error("Connection Failed!")
    })
};

module.exports = connectToMongoDB;