function route(handle, pathname, response, reviewData) {
  console.log("Routing a request for " + handle + pathname);
  var type = typeof handle[pathname];
  // console.log(comp);
  if (type === "function") {
    // console.log(")(*&^%$#");
    handle[pathname](response, reviewData);
  } else {
    console.log("No handler for " + pathname);
    response.writeHead(404, { "content-Type": "text/plain" });
    response.write("Error 404 Page not found");
    response.end();
  }
}
exports.route = route;
