import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;