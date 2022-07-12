const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const user = require("./models/users");
const bodyParser = require("body-parser");
const { response } = require("express");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/mongoose");
mongoose.connection
  .once("open", () => console.log("CONNECTED"))
  .on("error", (err) => {
    console.log("COULD NOT CONNECT", err);
  });

app.get("/", (req, res) => {
  res.send("ROOT");
});

app.post("/users", (req, res) => {
  const newUser = new user({
    //........ for hardcoded values..........//

    // firstName: "hemu",
    // isActive: true,

    //....... directly from the source ......//

    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isActive: req.body.isActive,
  });
  newUser
    .save()
    .then((savedUser) => {
      res.send("USER SAVED");
    })
    .catch((err) => {
      res.status(404).send(`USER NOT SAVED....${err}`);
    });
});

app.get("/users", (req, res) => {
  user.find({}).then((users) => {
    res.send(users);
  });
});
// const newUser = new user({
//   firstName: "ravi",
//   lastName: "macharapu",
//   isActive: true,
// });
// newUser.save(function (err, dataSaved) {
//   if (err) return console.log(err);
//   console.log(dataSaved);
// });

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
