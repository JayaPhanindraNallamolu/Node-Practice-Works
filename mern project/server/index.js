const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/user");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1/mern")
  .then(() => console.log("Connection Successful ..."))
  .catch((err) => {
    console.log(err);
  });

app.get("/getUsers", (req, res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new userModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
