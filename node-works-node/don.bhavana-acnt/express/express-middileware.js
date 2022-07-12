const express = require("express");
const app = express();
const port = process.env.PORT || 9999;
// app.use("/css", express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log("MIDDILEWARE");
  next();
});
app.get("/", (req, res) => {
  res.send(`<h3>Hi Express</h3>`);
});
app.listen(port);
console.log("it's working");
