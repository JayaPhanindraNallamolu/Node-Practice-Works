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

// app.delete("/users/:id", (req, res) => {
//   user.findOne({ _id: req.params.id }).then((user) => {
//     user
//       .remove()
//       .then((userRemoved) => {
//         res.send(userRemoved);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// });

app.delete("/users/:id", (req, res) => {
  user.findByIdAndRemove({ _id: req.params.id }).then((userRemoved) => {
    res.send(`User ${userRemoved.firstName} removed`);
  });
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
