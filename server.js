const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// GET Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to BlogDen API 🚀",
  });
});

// POST Route
app.post("/blogs", (req, res) => {
  const { title, author, content } = req.body;

  if (!title || !author || !content) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  res.status(201).json({
    success: true,
    message: "Blog received successfully!",
    blog: {
      title,
      author,
      content,
    },
  });
});

// Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});