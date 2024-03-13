//User authenication for signup and login
const router  = require("express").Router();
let User = require("../models/user");

//SIGN IN
router.post("/auth", async(req,res) => {
    try {
       const {email, username, password} = req.body;
       const user = new  User({email, username, password});
       await user.save().then(() => res.status(200).json({user : user}));
    } catch (error) {
        res.status(400).json({message: "User already exists"})
    }
});

module.exports = router;