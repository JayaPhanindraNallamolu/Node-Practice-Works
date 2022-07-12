var http = require("http");
var url = require("url");

function startServer(route, handle) {
  // console.log(handle + "Thsi is the handle");
  function onRequest(request, response) {
    var reviewData = "";
    var pathname = url.parse(request.url).pathname;
    // console.log(pathname + "@#$%");
    request.setEncoding("utf-8");
    request.addListener("data", (chunk) => {
      reviewData += chunk;
    });
    request.addListener("end", () => {
      route(handle, pathname, response, reviewData);
    });
  }

  http.createServer(onRequest).listen("5000");

  console.log("Server started with port : 5000");
}

exports.start = startServer;
