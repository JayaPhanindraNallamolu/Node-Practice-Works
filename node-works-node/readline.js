var readline = require("readline");
var util = require("util");

var RL = readline.createInterface(process.stdin, process.stdout);
RL.question("what is your name?", (name) => {
  RL.setPrompt(`${name} how old are you?`);
  RL.prompt();

  RL.on("line", (age) => {
    if (age < 18) {
      util.log(
        `${name.trim()} because you are ${age} years old, you cannot proceed`
      );
      RL.close();
    } else {
      util.log(`${name} is great and can enjoy our services`);
      RL.close();
    }
  });
});
