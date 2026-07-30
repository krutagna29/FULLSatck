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

// Update Blog
const updateBlog = (req, res) => {
  const id = Number(req.params.id);

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return res.status(404).json({
      success: false,
      message: "Blog not found.",
    });
  }

  const { title, author, content } = req.body;

  blog.title = title || blog.title;
  blog.author = author || blog.author;
  blog.content = content || blog.content;

  res.status(200).json({
    success: true,
    message: "Blog updated successfully!",
    blog,
  });
};

// Delete Blog
const deleteBlog = (req, res) => {
  const id = Number(req.params.id);

  const index = blogs.findIndex((blog) => blog.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Blog not found.",
    });
  }

  const deletedBlog = blogs.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Blog deleted successfully!",
    blog: deletedBlog[0],
  });
};


module.exports = {
  addBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};