var fs = require("fs");

fs.readFile("input.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Async data is : " + data.toString());
  }
});

var data = fs.readFileSync("input.txt");
console.log("Sync data is : " + data.toString());
