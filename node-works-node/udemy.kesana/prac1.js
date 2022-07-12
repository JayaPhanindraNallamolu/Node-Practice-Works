const fs = require("fs");
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

const bookJson = JSON.stringify(book); //converts to a string.
const parseData = JSON.parse(bookJson);

console.log(bookJson);
console.log(parseData.author);

// fs.writeFileSync("hai.json", bookJson);

const dataBuffer = fs.readFileSync("hai.json");
console.log(dataBuffer); //data is in bytes.
const dataJson = dataBuffer.toString(); //converted to string.
const data = JSON.parse(dataJson); // data converted toa javascript object.
console.log(data.author);
