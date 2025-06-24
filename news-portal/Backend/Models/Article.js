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
    default: 0, // ← Initializes every blog with 0 likes
  }
}, { timestamps: true });
