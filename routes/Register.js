const Express = require("express");
const Mongoose = require("mongoose");
const User = require("../schema/User")
const Register = Express();



Register.post("/register", (req, res) => {
    console.log(req.body);
    const ReqUser = new User({
        username: req.body.username,
        password:  req.body.password,
        name:  req.body.name,
        surname:  req.body.surname,
        age:  req.body.age,
        gender:  req.body.gender
    });
    try{
        ReqUser.save()
    }
    catch(error){
        res.json({ message: error})
    }    
})

// LogIn.get("/login", (res, req) => {
//     res.send()
// });

module.exports = Register; 