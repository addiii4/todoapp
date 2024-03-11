const express = require("express");
const app = express();
require("./connection/conn");

app.get("/", (req,res) => {
    res.send("Hello");
})

app.listen(1000, () => {
    console.log("Server Running");
});