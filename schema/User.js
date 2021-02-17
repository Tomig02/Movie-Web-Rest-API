const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    surname: String,
    age: String,
    gender: String
},{collection: "Users"})

module.exports = mongoose.model("User", UserSchema);