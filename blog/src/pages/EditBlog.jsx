import { useEffect, useState } from "react";
import axios from "axios";

function EditBlog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

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
      const res = await axios.get("http://localhost:5000/blogs");
      setBlogs(res.data.blogs);
    } catch (err) {
      console.log(err);
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

    try {
      await axios.put(
        `http://localhost:5000/blogs/${selectedId}`,
        formData
      );

      alert("Blog updated successfully!");

      setSelectedId(null);

      setFormData({
        title: "",
        author: "",
        content: "",
      });

      fetchBlogs();
    } catch (err) {
      console.log(err);
      alert("Failed to update blog.");
    }
  };

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">
        Edit Blog
      </h2>

      {/* Edit Form */}

      <div className="card shadow mb-5">
        <div className="card-body">

          <form onSubmit={handleUpdate}>

            <div className="mb-3">
              <label className="form-label">
                Blog Title
              </label>

              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Author
              </label>

              <input
                type="text"
                name="author"
                className="form-control"
                value={formData.author}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Content
              </label>

              <textarea
                rows="5"
                name="content"
                className="form-control"
                value={formData.content}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
            >
              Update Blog
            </button>

          </form>

        </div>
      </div>

      <h3 className="mb-4">Available Blogs</h3>

      <div className="row">

        {blogs.length === 0 ? (
          <h5 className="text-center">
            No blogs available.
          </h5>
        ) : (
          blogs.map((blog) => (
            <div
              className="col-md-4 mb-4"
              key={blog.id}
            >
              <div className="card shadow-sm h-100">

                <div className="card-body">

                  <h4>{blog.title}</h4>

                  <p>
                    {blog.content}
                  </p>

                  <small className="text-muted">
                    By {blog.author}
                  </small>

                  <br />

                  <button
                    className="btn btn-warning mt-3"
                    onClick={() => handleEdit(blog)}
                  >
                    Edit
                  </button>

                </div>

              </div>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default EditBlog;