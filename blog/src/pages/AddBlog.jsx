import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function AddBlog() {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(`${API}/blogs`, formData);

      alert(response.data.message);

      setFormData({
        title: "",
        author: "",
        content: "",
      });

      setErrors({});

      // Redirect to Home page
      navigate("/");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add New Blog</h2>

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