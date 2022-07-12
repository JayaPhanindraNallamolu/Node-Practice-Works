const { MongoClient, ObjectId } = require("mongodb");
MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
  if (err) throw err;

  const db = client.db("animals");
  console.log("CONNECTED");
  db.collection("mammals")
    .findOneAndUpdate(
      {
        _id: new ObjectId("628c64bb35e6394989e4b96a"),
      },

      { $set: { name: "German Shephard", animal: "dog", legs: "4" } }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
