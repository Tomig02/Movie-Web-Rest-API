const Express = require("express");
const Mongoose = require("mongoose");
const User = require("../schema/User")
const Register = Express();


Register.post("/register", (req, res) => {
    const ReqUser = new User(req.body);
    try{
        ReqUser.save()
    }
    catch(err){
        res.json({ message: err.message})
    }    
})

// LogIn.get("/login", (res, req) => {
//     res.send()
// });

module.exports = Register; 