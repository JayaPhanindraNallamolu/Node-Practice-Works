import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose
  .connect("mongodb://127.0.0.1:27017/Mongoose")
  .then(() => console.log("connection successful ..."))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: String,
  title: String,
  copies: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = mongoose.model("Test", playlistSchema);

const getDocument = async () => {
  try {
    //   const result = await Playlist.find(); // shows all the documents.
    //   const result = await Playlist.find({ name: "ReactJs" }); // shows only ReactJs documents.
    //   const result = await Playlist.find({ name: "ReactJs" }).select({ name: 1 }); // shows only the names of the ReactJs matched documents.
    const result = await Playlist.find({ name: "ReactJs" })
      .select({ name: 1 })
      .limit(1); // shows only the name of document that matched with the ReactJs.
    console.log(result);
    //   console.log(result.length);
  } catch (err) {
    console.log(err);
  }
};

getDocument();
