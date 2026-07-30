const express = require("express");
const router = express.Router();

const {
  addBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// Add Blog
router.post("/", addBlog);

// Get All Blogs
router.get("/", getBlogs);

// Update Blog
router.put("/:id", updateBlog);

// Delete Blog
router.delete("/:id", deleteBlog);

module.exports = router;