const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 5 },
  keyword: {
    type: String,
    required: true,
    minlength: 5,
  },
  location: { type: String, required: true },
  dateCreated: { type: String, required: true },
  image: {
    type: String,
    required: true,
    validate: [/^https?:\/\//i, "Invalid image url!"],
  },
  description: { type: String, required: true },
  rating: { type: Number, default: 0 },
  postVotes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
postSchema.method("getVotes", function () {
  return this.postVotes.map((x) => x.email).join(", ");
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
