const { error } = require("console");
const Express = require("express");
const Mongoose = require("mongoose");
const User = require("../schema/User")
const LogIn = Express();



LogIn.get("/login", async (req, res) => {
    let user;
    try{
        const user = await User.findOne({username: "" + req.body.username})
        if((!user) | (user.password != req.body.password)) throw new Error("Invalid user or password");
        res.json(user);
    }
    catch(err){
        res.json({message: err.message});
    }
})

module.exports = LogIn; 