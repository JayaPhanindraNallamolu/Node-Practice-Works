// const MongoClient = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");
MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
  if (err) throw err;

  const db = client.db("animals");

  console.log("connected");

  db.collection("mammals")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;

      console.log(result);
    });
});
