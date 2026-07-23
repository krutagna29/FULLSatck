import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="add-blog" element={<AddBlog />} />
      </Route>
    </Routes>
  );
}

export default App;