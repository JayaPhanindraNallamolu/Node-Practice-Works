const yargs = require("yargs");
// var fs = require("fs");
const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "Add your note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Contents of add",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Title: ", argv.title);
    // console.log("Body: ", argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove your note",
  handler: function () {
    console.log("Removing your note!");
  },
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("List out all your notes!");
  },
});

yargs.command({
  command: "read",
  describe: "Read your note",
  handler: function () {
    console.log("Read your note!");
  },
});

// console.log(yargs.argv);
yargs.parse();
