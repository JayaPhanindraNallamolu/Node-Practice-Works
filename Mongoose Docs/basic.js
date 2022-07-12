import mongoose from "mongoose";
import { createBrotliDecompress } from "zlib";
const { Schema } = mongoose;

mongoose
  .connect("mongodb://127.0.0.1:27017/Mongoose")
  .then(() => console.log("connection successful...."))
  .catch((err) => console.log(err));

//   Schema defines the document structure.
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

const Playlist = mongoose.model("Test", playlistSchema); //Collection Structure defining

const createDocument = async () => {
  try {
    const jpPlaylist = new Playlist({
      name: "Jps",
      title: "poets",
      copies: 390,
      active: false,
    });

    const result = await jpPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
