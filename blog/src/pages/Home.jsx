import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://blogden-qg1k.onrender.com/blogs");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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
      {loading ? (
        <div className="text-center">
          <h5>Loading blogs...</h5>
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center">
          <h4>No blogs available.</h4>
          <p className="text-muted">
            Add your first blog from the Add Blog page.
          </p>
        </div>
      ) : (
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="card shadow-sm h-100 animate-card">
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
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;