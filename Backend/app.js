//Created server using express JS
const express = require("express");
const app = express();
require("./connection/conn");
const auth = require('./routes/auth');
app.use(express.json());       //Sending data in JSON format

app.get("/", (req,res) => {
    res.send("Hello");
})

app.use("/api/v1", auth);

app.listen(3000, () => {
    console.log("Server Running");
});