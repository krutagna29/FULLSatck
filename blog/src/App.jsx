import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Add Blog Page */}
        <Route path="add-blog" element={<AddBlog />} />

        {/* Edit Blog Page */}
        <Route path="edit-blog" element={<EditBlog />} />
      </Route>
    </Routes>
  );
}

export default App;