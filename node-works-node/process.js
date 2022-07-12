process.stdout.write("ask me a qn ");
process.stdin.on("data", function (answer) {
  console.log(answer.toString().trim());
});
process.exit();
