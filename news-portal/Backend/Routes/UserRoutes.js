const express = require("express");
const Blog = require("../Models/Article")
const router = express.Router();

router.get("/add-blog", (req,res) => {
       const blog = new Blog({
        title:"Bhilai Portal",
        snippet: "Local News",
        body: "Great Local News"
       })

       blog.save()
       .then((result) => {
        res.send(result)
       }).catch((err) => {
        console.log(err.message)
       }) //Async Task
  })

 
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