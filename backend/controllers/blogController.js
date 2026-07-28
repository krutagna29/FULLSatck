const blogs = require("../data/blogs");

// Add Blog
const addBlog = (req, res) => {
  const { title, author, content } = req.body;

  if (!title || !author || !content) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  const newBlog = {
    id: blogs.length + 1,
    title,
    author,
    content,
  };

  blogs.push(newBlog);

  res.status(201).json({
    success: true,
    message: "Blog created successfully!",
    blog: newBlog,
  });
};

// Get All Blogs
const getBlogs = (req, res) => {
  res.status(200).json({
    success: true,
    blogs,
  });
};

module.exports = {
  addBlog,
  getBlogs,
};