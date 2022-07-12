const express = require("express");
const app = express();
const port = process.env.PORT || 9999;

app.get("/", (req, res) => {
  res.send(`<h1>Hello Express Js</h1>`);
});

app.get("/api", (req, res) => {
  //   res.send(`<h1>Hello from API</h1>`);
  res.json({
    name: "jp",
    company: "mobigesture",
  });
});

app.listen(port);
console.log("it is working");
