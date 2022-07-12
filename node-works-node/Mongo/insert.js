const MongoClient = require("mongodb").MongoClient;
// const { MongoClient, ObjectId} = require("mongodb");
MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
  if (err) throw err;

  //   const object = new ObjectId();
  //   console.log(object);

  const db = client.db("animals");

  db.collection("mammals").insertOne(
    {
      name: "Whale",
      legs: "0",
    },
    (err, result) => {
      if (err) {
        return console.log(err);
      }

      console.log("INSERTED");
    }
  );

  console.log("connected");
});

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/animals");
// mongoose.connection
//   .once("open", () => console.log("connected"))
//   .on("error", (err) => {
//     console.log("could not connect", err);
//   });
