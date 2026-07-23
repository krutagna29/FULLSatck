function Home() {
  return (
    <>
      <div className="hero">
        <h1>Welcome to BlogDen</h1>
        <p>Read, write and share your ideas with the world.</p>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="blog-card">
            <h3>Getting Started with React</h3>
            <p>Learn the basics of React and component-based development.</p>
            <small className="author">By Krutagna Patel</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="blog-card">
            <h3>Why Learn Full Stack?</h3>
            <p>Explore the benefits of becoming a full-stack developer.</p>
            <small className="author">By Admin</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="blog-card">
            <h3>CSS Tips</h3>
            <p>Create modern, responsive user interfaces with CSS.</p>
            <small className="author">By Guest</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;