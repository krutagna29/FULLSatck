const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// JavaScript Array
const blogs = [];

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to BlogDen API 🚀",
  });
});

// Add Blog API
app.post("/blogs", (req, res) => {
  const { title, author, content } = req.body;

  // Validation
  if (!title || !author || !content) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  // Create Blog Object
  const blog = {
    id: blogs.length + 1,
    title,
    author,
    content,
  };

  // Store in JavaScript Array
  blogs.push(blog);

  res.status(201).json({
    success: true,
    message: "Blog created successfully!",
    data: blog,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});