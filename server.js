const Express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

Mongoose.connect(process.env.MONGO_AUTH, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("DB Connected")
});
const server = Express();

//MIDDLEMAN
server.use(cors());
server.options("*",cors());
server.use(Express.json());

const db = Mongoose.connection;
db.on("error", (error) => console.log(error));


db.once("open", () => {
    console.log("db connected")    
});

server.use("/", require("./routes/LogIn"));
server.use("/", require("./routes/Register"));

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log("listening port: " + PORT );
});