const express = require("express");
const router = express.Router();

const { addBlog } = require("../controllers/blogController");

router.post("/", addBlog);

module.exports = router;