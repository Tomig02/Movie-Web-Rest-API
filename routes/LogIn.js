const { error } = require("console");
const Express = require("express");
const Mongoose = require("mongoose");
const User = require("../schema/User")
const LogIn = Express();

// Request username from server and if user exists and password matches, 
// then return user 
LogIn.get("/login", async (req, res) => {
    if(req.body.username){
        try{
            const user = await User.findOne({username: "" + req.body.username}, {__v: false})
            if((!user) || (user.password != req.body.password)) throw new Error("Invalid user or password");
            res.json(user);
        }
        catch(err){
            res.json({message: err.message});
        }
    } else 
        if(!!req.body.id){
            try{
                const user = await User.findById(req.body.id);
                if(!user) throw new Error("Token expired");
                res.json(user);
            }catch(err){
                res.json({message: err.message});
            } 
        }
})

module.exports = LogIn; 