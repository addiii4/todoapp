//APIs for creating, updating  and deleting a task
const router  = require("express").Router();
let User = require("../models/user");
let List = require("../models/list");

//CREATE Task
router.post("/addTask", async(req,res) => {
    try {
        const {title, body, email} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            const list = new List({ title, body, user: existingUser});
            await list.save().then(() => res.status(201).json({list}))
            existingUser.list.push(list);
            existingUser.save();
        }
    } catch (error) {
        console.log(error);
    }
})

//UPDATE Task
router.put("/updateTask/:id", async(req,res) => {
    try {
        const {title, body, email} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            const list = await List.findByIdAndUpdate(req.params.id, {title, body});
            list.save().then(() => res.status(200).send('Task Updated!'));
        }
    } catch (error) {
        console.log(error);
    }
})

//DELETE Task
router.delete("/deleteTask/:id", async(req,res) => {
    try {
        const {title, body, email} = req.body;
        const existingUser = await User.findOneAndUpdate({email}, {$pull:{list: req.params.id}});
        if(existingUser){
            await List.findByIdAndDelete(req.params.id).then(() => res.status(200).send('Task Deleted!'));;
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
