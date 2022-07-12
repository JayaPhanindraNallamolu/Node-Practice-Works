const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 9999;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/assets", express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log("MIDDILEWARE");
  next();
});

app.post("/post", (req, res) => {
  console.log(req.body);
});

app.listen(port);
console.log("it's working");
