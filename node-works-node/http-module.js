// var http = require("http");
// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { "content-Type": "text/plain" });
//     response.write("Hello World!");
//     response.end();
//   })
//   .listen(8888);

//After running the file go to browser and search localhost:8888

//Another way

var http = require("http");
const hostName = "127.0.0.1";
const port = "8000";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-Type", "text/plain");
  res.end("Hello World!");
});

server.listen(port, hostName, () => {
  console.log(`Server running at ${hostName}:${port}`);
});
