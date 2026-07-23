function AddBlog() {
  return (
    <div className="blog-form">
      <h2>Add New Blog</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Blog Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter blog title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter author name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Blog Content</label>
          <textarea
            rows="5"
            className="form-control"
            placeholder="Write your blog here..."
          ></textarea>
        </div>

        <button className="btn btn-primary">
          Publish Blog
        </button>
      </form>
    </div>
  );
}

export default AddBlog;