const express = require("express");
const Blog = require("../Models/Article")
const router = express.Router();

router.post("/add-blog", async (req, res) => {
  const { title, snippet, body, category } = req.body;

  try {
    const blog = new Blog({ title, snippet, body, category });
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error("Error saving blog:", error.message);
    res.status(500).json({ error: "Failed to save blog" });
  }
});

 
router.get("/blogs/:id", (req, res) =>
{
  const id = req.params.id;
  Blog.findById(id)
  .then((result) => {
    res.send({blog: result})
  }).catch((err) => {
    console.log(err.message)
  })
})

// DELETE a blog by ID
router.delete("/blogs/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully", blog: deletedBlog });
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

// Serve static HTML files
  

router.get("/blogs", (req,res) => {
  Blog.find()
  .then((result) => {
    res.json({blog: result})
    console.log(result)
  }).catch((err) => {
    console.log(err.message)
  })
})


module.exports = router;