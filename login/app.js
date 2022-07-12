const mongoose = require("mongoose");
const express = require("express");
const app = express();
mongoose.Promise = global.Promise;
const user = require("./models/users");
const bodyparser = require("body-parser");
// const port = process.env.PORT || 8000;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const bcrypt = require("bcryptjs");

mongoose.connect("mongodb://127.0.0.1/login", () => {
  console.log("connected");
});
const e = require("express");

app.post("/register", (req, res) => {
  const newUser = new user();
  newUser.email = req.body.email;
  newUser.password = req.body.password;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) return err;
      res.send(hash);
      newUser.password = hash;

      newUser
        .save()
        .then((userSaved) => {
          res.send("USER SAVED");
        })
        .catch((err) => {
          res.send("USER WAS NOT SAVED BECAUSE ..." + err);
        });
    });
  });
});

app.post("/login", (req, res) => {
  user.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) return err;
        if (result) {
          res.send("USER LOGGEDIN");
        } else {
          res.send("NOT ABLE TO LOGIN");
        }
      });
    }
  });
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
