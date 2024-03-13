//Created server using express JS
const express = require("express");
const app = express();
require("./connection/conn");
const auth = require('./routes/auth');
const task = require('./routes/task');
app.use(express.json());       //Sending data in JSON format

app.get("/", (req,res) => {
    res.send("Hello");
})

app.use("/api/v1", auth);
app.use("/api/v2", task);

app.listen(3000, () => {
    console.log("Server Running");
});