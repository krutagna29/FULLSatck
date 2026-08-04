import { useEffect, useState } from "react";
import axios from "axios";


function EditBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API}/blogs`);
      setBlogs(res.data.blogs);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setSelectedId(blog.id);

    setFormData({
      title: blog.title,
      author: blog.author,
      content: blog.content,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!selectedId) {
      alert("Please select a blog to edit.");
      return;
    }

    if (
      !formData.title.trim() ||
      !formData.author.trim() ||
      !formData.content.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.put(
  `${API}/blogs/${selectedId}`,
  formData
);

      alert(res.data.message);

      setSelectedId(null);

      setFormData({
        title: "",
        author: "",
        content: "",
      });

      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert("Failed to update blog.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      const res = await axios.delete(`${API}/blogs/${id}`
);

      alert(res.data.message);

      if (selectedId === id) {
        setSelectedId(null);

        setFormData({
          title: "",
          author: "",
          content: "",
        });
      }

      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert("Failed to delete blog.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Edit Blog</h2>

      <div className="card shadow mb-5">
        <div className="card-body">
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Blog Title</label>

              <input
                type="text"
                className="form-control"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Author</label>

              <input
                type="text"
                className="form-control"
                name="author"
                value={formData.author}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Content</label>

              <textarea
                rows="5"
                className="form-control"
                name="content"
                value={formData.content}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              className="btn btn-success w-100"
              type="submit"
            >
              Update Blog
            </button>
          </form>
        </div>
      </div>

      <h3 className="mb-4">Available Blogs</h3>

      {loading ? (
        <h5 className="text-center">Loading blogs...</h5>
      ) : blogs.length === 0 ? (
        <h5 className="text-center">No blogs available.</h5>
      ) : (
        <div className="row">
          {blogs.map((blog) => (
            <div
              className="col-md-4 mb-4"
              key={blog.id}
            >
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h4>{blog.title}</h4>

                  <p>
                    {blog.content.length > 120
                      ? blog.content.substring(0, 120) + "..."
                      : blog.content}
                  </p>

                  <small className="text-muted">
                    By {blog.author}
                  </small>

                  <div className="mt-3 d-flex gap-2">
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(blog)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EditBlog;