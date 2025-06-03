const express = require("express");
const Blog = require("../Models/Article")
const router = express.Router();

router.post("/add-blog", async (req, res) => {
  const { title, snippet, body } = req.body;

  try {
    const blog = new Blog({ title, snippet, body });
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

// Serve static HTML files
  

router.get("/blogs", (req,res) => {
  Blog.find()
  .then((result) => {
    res.json({title: "All Blogs", blog: result})
    console.log(result)
  }).catch((err) => {
    console.log(err.message)
  })
})


module.exports = router;