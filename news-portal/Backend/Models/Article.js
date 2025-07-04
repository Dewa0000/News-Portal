const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
  },
  imageURL: {
    type: String
  },
  likes: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
