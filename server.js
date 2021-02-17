const Express = require("express");
const Mongoose = require("mongoose");

Mongoose.connect("mongodb+srv://Tomig02:132ckinfkincho@social.pveot.mongodb.net/userdata?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("DB Connected")
});
const server = Express();

const db = Mongoose.connection;

db.on("error", (error) => console.log(error));

db.on("open", () => {
    server.use(Express.json());
    server.use("/", require("./routes/LogIn"));
    server.use("/", require("./routes/Register"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("listening port: " + PORT );
});