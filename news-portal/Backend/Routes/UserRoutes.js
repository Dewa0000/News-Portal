const express = require("express");
const Blog = require("../Models/Article");
const User = require("../Models/User");
const router = express.Router();

//Login route
router.post("/login", async (req,res) => {
      res.json({msg: "login User"})
})

//Signup route
router.post("/signup", async (req,res) => {
      const {email,password} = req.body;

      try{
          const user = await User.signup(email,password);
          res.status(200).json({email,user});
      }catch(error){
          res.status(400).json({error: error.message})
      }
})

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
  

router.get("/blogs", async (req, res) => {
  const { category } = req.query;

  try {
    const filter = category ? { category: category.toLowerCase() } : {};
    const blogs = await Blog.find(filter);
    res.json({ blog: blogs });
  } catch (err) {
    console.error("Error fetching blogs:", err.message);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});



module.exports = router;