const fs = require("fs");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

if (process.argv[2] === "jp") {
  fs.writeFileSync("practice.txt", "Hai this is Jp.");

  fs.appendFileSync("practice.txt", " Am Learning NodeJs");

  console.log(validator.isEmail("anand@gmail.com"));
  console.log(validator.isURL("www.google.co.in"));
  console.log(chalk.underline.blue("Hello Node!"));

  console.log(process.argv);
  //   console.log("Hai " + process.argv[2]);
  console.log(yargs.argv);
} else {
  console.log(chalk.red.bold("permission denied"));
  console.log(process.argv);
  console.log(yargs.argv);
}
