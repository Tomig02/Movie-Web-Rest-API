const Express = require("express");
const User = require("../schema/User")
const Register = Express();

// check if user exists and act acordingly, returns a message
// and a boolean to say if succesful or not
Register.post("/register", async (req, res) => {
    const ReqUser = new User(req.body);
    try{
        let user = await User.findOne({username: "" + req.body.username}, {__v: false});
        user = await User.findOne({email: "" + req.body.email}, {__v: false})
        if(user){
            res.json(message = "User already exists", isReg = false);
        }
        else{
            res.json(message = "User created succesfully", isReg = true);
            ReqUser.save()
        }
    }
    catch(err){
        res.json({ message: err.message})
    }    
})

module.exports = Register; 