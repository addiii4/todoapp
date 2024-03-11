//Connecting to MongoDB
const mongoose = require("mongoose");

const conn = async (req,res) => {
    try {
        await mongoose.connect("mongodb+srv://adi:kjnWxXhZaQ0G8kRb@cluster0.wprfa0n.mongodb.net/")
        .then(() => {
            console.log("Connected");
        });
    } catch (error) {
        res.status(400).json({
            message: "Not Connected",
        });
    }
};

conn();