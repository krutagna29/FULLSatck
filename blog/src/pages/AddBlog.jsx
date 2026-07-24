import { useState } from "react";

function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Blog title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author name is required";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Blog content is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("🎉 Blog submitted successfully!");

    console.log(formData);

    setFormData({
      title: "",
      author: "",
      content: "",
    });

    setErrors({});
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">Add New Blog</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Blog Title</label>

            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={handleChange}
            />

            {errors.title && (
              <small className="text-danger">{errors.title}</small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Author Name</label>

            <input
              type="text"
              name="author"
              className="form-control"
              placeholder="Enter author name"
              value={formData.author}
              onChange={handleChange}
            />

            {errors.author && (
              <small className="text-danger">{errors.author}</small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Blog Content</label>

            <textarea
              name="content"
              rows="5"
              className="form-control"
              placeholder="Write your blog..."
              value={formData.content}
              onChange={handleChange}
            ></textarea>

            {errors.content && (
              <small className="text-danger">{errors.content}</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;