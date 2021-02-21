const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    surname: String,
    age: String,
    gender: String,
    favoriteMovies: [],
    savedMovies: []
},{collection: "Users"})

module.exports = mongoose.model("User", UserSchema);