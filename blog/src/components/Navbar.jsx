import { Link } from "react-router-dom";

function Navbar() {
  const closeNavbar = () => {
    const navbar = document.getElementById("navbar");

    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          BlogDen
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add-blog" onClick={closeNavbar}>
                Add Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/edit-blog" onClick={closeNavbar}>
                Edit Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;