//User authenication for signup and signin
const router  = require("express").Router();
let User = require("../models/user");
const bcrypt =  require('bcryptjs');

//SIGN UP
router.post("/signup", async(req,res) => {
    try {
    const {email, username, password} = req.body;
    const hashPassword = bcrypt.hashSync(password);
    const user = new  User({email, username, password: hashPassword});
    await user.save().then(() => res.status(200).json({user : user}));
    } catch (error) {
        res.status(400).json({message: "User already exists"})
    }
});

//SIGN IN
router.post("/signin", async(req,res) => {
    try {
    const user = await User.findOne({email: req.body.email});
    if(!user){
        res.status(404).json({message: "404: User not found :("})
    } else{
        let validPass = bcrypt.compareSync(req.body.password, user.password);
        if (!validPass) {
            res.status(401).json({message: "Invalid password"})
        }
        const { password, ...others} =  user._doc;
        res.status(200).json(others)
    }
    } catch (error) {
        res.status(400).json({message: "User already exists"})
    }
});

module.exports = router;