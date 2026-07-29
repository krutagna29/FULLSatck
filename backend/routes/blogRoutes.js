const express = require("express");
const router = express.Router();

const {
  addBlog,
  getBlogs,
  updateBlog,
} = require("../controllers/blogController");

router.post("/", addBlog);
router.get("/", getBlogs);
router.put("/:id", updateBlog);

module.exports = router;