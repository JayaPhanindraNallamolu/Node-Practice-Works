//readable Stream

var fs = require("fs");

var readableStream = fs.createReadStream("input.txt");
var data = "";
readableStream.setEncoding("utf-8");
readableStream.on("data", function (chunk) {
  data += chunk;
});
readableStream.on("end", function () {
  console.log(data);
});

//writable Stream

var writedata = "This is nodejs course";
var writableStream = fs.createWriteStream("output.txt");
writableStream.write(writedata, "utf-8");
writableStream.end();
writableStream.on("finish", function () {
  console.log("Write completed!");
});
