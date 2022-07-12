const mongoose = require("mongoose");
const express = require("express");
const users = require("./models/users");
const app = express();
const port = process.env.PORT || 9000;

mongoose.connect("mongodb://127.0.0.1:27017/mongoose");
mongoose.connection
  .once("open", () => console.log("CONNECTED"))
  .on("error", (err) => {
    console.log(`COULD NOT CONNECT BECAUSE ${err}`);
  });

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});

app.get("/users", (req, res) => {
  users.find({}).then((users) => {
    res.status(200).send(users);
  });
});
