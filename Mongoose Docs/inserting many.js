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
    const reactPlaylist = new Playlist({
      name: "ReactJs",
      title: "React",
      copies: 30,
      active: true,
    });
    const nodePlaylist = new Playlist({
      name: "NodeJs",
      title: "Node",
      copies: 50,
      active: true,
    });
    const mongoPlaylist = new Playlist({
      name: "MongoDB",
      title: "Mongo",
      copies: 20,
      active: true,
    });
    const mongoosePlaylist = new Playlist({
      name: "Mongoose",
      title: "Mongoose",
      copies: 10,
      active: true,
    });

    const result = await Playlist.insertMany([
      reactPlaylist,
      nodePlaylist,
      mongoPlaylist,
      mongoosePlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
