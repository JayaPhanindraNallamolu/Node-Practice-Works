const mongoose = require("mongoose");
const schema = mongoose.Schema;
const postSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "public",
  },
  date: {
    type: Number,
  },
  time: {
    type: Number,
  },
  allowComments: {
    type: Boolean,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
});

module.exports = mongoose.model("posts", postSchema);
