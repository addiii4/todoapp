//Connecting to MongoDB
const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect("mongodb+srv://adi:kjnWxXhZaQ0G8kRb@cluster0.wprfa0n.mongodb.net/")
        .then(() => {
            console.log("Connected");
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

conn();