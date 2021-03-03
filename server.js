const Express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// conect to mongodb atlas
Mongoose.connect(process.env.DATABASE_URI, { useUnifiedTopology: true, useNewUrlParser: true });
const server = Express();

//MIDDLEMAN
server.use(cors());
server.options("*",cors());
server.use(Express.json());

const db = Mongoose.connection;
db.on("error", (error) => console.log(error));


db.on("open", () => {
    
    server.use("/", require("./routes/LogIn"));
    server.use("/", require("./routes/Register"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT);