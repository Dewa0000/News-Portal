import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Tech from "./Pages/Tech";
import Startups from "./Pages/Startups";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import SearchResults from "./Components/searchResults";
import "./App.css";
import { useEffect, useState } from "react";
import AddBlog from "./Pages/Addblog";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blog); 
      })
      .catch((err) => {
        console.log("Fetch error:", err.message);
      });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/add-blog" element={<AddBlog/>}></Route>
          </Routes>

          <div className="p-4">
            <p className="text-xl font-bold">Blogs: {blogs.length}</p>
            {blogs.map((blog, i) => (
              <div key={blog._id || i} className="border p-2 my-2 rounded">
                <p className="text-lg font-semibold">{blog.title}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
