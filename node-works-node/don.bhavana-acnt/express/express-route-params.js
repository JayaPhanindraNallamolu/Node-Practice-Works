const express = require("express");
const port = process.env.PORT || 9999;
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>`);
});
app.get("/post/:id", (req, res) => {
  res.send(`<h3>Here is ${req.params.id}</h3>`);
});
app.listen(port);
console.log("it's working");
