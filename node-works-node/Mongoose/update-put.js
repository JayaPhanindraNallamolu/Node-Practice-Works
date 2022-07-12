const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.Port || 6000;
const user = require("./models/users");
const bodyparser = require("body-parser");
const { MongoCursorInUseError } = require("mongodb");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/mongoose");
mongoose.connection
  .once("open", () => {
    console.log("CONNECTED");
  })
  .on("error", (err) => {
    console.log(`COULD NOT CONNECT BECAUSE ....${err}`);
  });
// app.put("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   user
//     .findByIdAndUpdate(
//       { _id: id },
//       { $set: { firstName: firstName, lastName: lastName } },
//       { new: true }
//     )
//     .then((savedUser) => {
//       res.send("USER SAVED BY PUT");
//     });
// });

// ---------> Another way of doing it ------>

app.put("/users/:id", (req, res) => {
  user.findOne({ _id: req.params.id }).then((user) => {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    user
      .save()
      .then((userSaved) => {
        res.send(userSaved);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
