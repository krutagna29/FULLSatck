import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/blogs");
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Welcome to BlogDen</h1>
        <p className="text-muted">
          Read, write, and share your ideas with the world.
        </p>
      </div>

      {/* Blog List */}
      <div className="row">
        {blogs.length === 0 ? (
          <div className="text-center">
            <h4>No blogs available.</h4>
            <p className="text-muted">
              Add your first blog from the Add Blog page.
            </p>
          </div>
        ) : (
          blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h4 className="card-title">{blog.title}</h4>

                  <p className="card-text">
                    {blog.content.length > 120
                      ? blog.content.substring(0, 120) + "..."
                      : blog.content}
                  </p>

                  <hr />

                  <small className="text-muted">
                    <strong>Author:</strong> {blog.author}
                  </small>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;