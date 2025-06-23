const express = require("express");
const Blog = require("../Models/Article");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// 🔐 Create token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// ✅ LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ SIGNUP
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ ADD BLOG
router.post("/add-blog", async (req, res) => {
  const { title, snippet, body, category } = req.body;

  try {
    const blog = new Blog({ title, snippet, body, category: category.toLowerCase() });
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error("Error saving blog:", error.message);
    res.status(500).json({ error: "Failed to save blog" });
  }
});

// ✅ GET A BLOG BY ID
router.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json({ blog });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

// ✅ UPDATE BLOG BY ID
router.put("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  const { title, snippet, body, category } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, snippet, body, category: category.toLowerCase() },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error.message);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

// ✅ DELETE BLOG BY ID
router.delete("/blogs/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json({ message: "Blog deleted successfully", blog: deletedBlog });
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

// ✅ GET ALL BLOGS (OPTIONAL: FILTER BY CATEGORY)
router.get("/blogs", async (req, res) => {
  const { category } = req.query;

  try {
    const filter = category ? { category: category.toLowerCase() } : {};
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.status(200).json({ blogs });
  } catch (err) {
    console.error("Error fetching blogs:", err.message);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

module.exports = router;
