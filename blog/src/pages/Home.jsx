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
      console.error(error);
    }
  };

  return (
    <>
      <div className="hero">
        <h1>Welcome to BlogDen</h1>
        <p>Read, write and share your ideas with the world.</p>
      </div>

      <div className="row mt-5">
        {blogs.length === 0 ? (
          <h4 className="text-center">No blogs available.</h4>
        ) : (
          blogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="blog-card">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <small className="author">By {blog.author}</small>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;