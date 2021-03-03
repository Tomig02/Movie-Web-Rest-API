const Express = require("express");
const User = require("../schema/User")
const Register = Express();

// check if user exists and act acordingly, returns a message
// and a boolean to say if succesful or not
Register.post("/register", async (req, res) => {
    const ReqUser = new User(req.body);
    try{
        const user = await User.findOne({username: "" + req.body.username}, {__v: false});
        if(user){
            res.json({result: "User already exists", isReg: false});
        }
        else{
            res.json({result: "User created succesfully", isReg: true});
            ReqUser.save()
        }
    }
    catch(err){
        res.json({ message: err.message})
    }    
})

module.exports = Register; 