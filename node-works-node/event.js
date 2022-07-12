var events = require("events");

var eventEmitter = new events.EventEmitter();

// eventemitter.on("newEvent", (message) => {
//   console.log(`message : ${message}`);
// });

// eventemitter.emit("newEvent", "Hello this is Jp");

var ringbell = function () {
  console.log("Ring-Ring-Ring");
};

eventEmitter.on("dooropen", ringbell);
eventEmitter.on("message", function () {
  console.log("Welcome");
});
eventEmitter.emit("dooropen");
eventEmitter.emit("message");
