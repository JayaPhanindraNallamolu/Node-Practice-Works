const { MongoClient, ObjectId } = require("mongodb");
MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
  if (err) throw err;

  const db = client.db("animals");
  console.log("CONNECTED");
  db.collection("mammals")
    .findOneAndDelete({
      _id: new ObjectId("628c6549df412adaf21bb2c5"),
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
