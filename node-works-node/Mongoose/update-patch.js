const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const user = require("./models/users");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/mongoose");
mongoose.connection
  .once("open", () => {
    console.log("CONNECTED");
  })
  .on("error", (err) => {
    console.log(`COULD NOT CONNECT BECAUSE ${err}`);
  });

app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  const firstName = req.body.firstName;

  user
    .findByIdAndUpdate(
      { _id: id },
      { $set: { firstName: firstName }},
      { new: true }
    )
    .then((savedUser) => {
      res.send("USER SAVED BY PATCH");
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
