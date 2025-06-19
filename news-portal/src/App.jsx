import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Tech from "./Pages/Tech";
import Startups from "./Pages/Startups";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SearchResults from "./Components/searchResults";
import BlogDetails from "./Pages/Details";
import "./App.css";
import { useEffect, useState } from "react";
import AddBlog from "./Pages/Addblog";
import Books from "./Pages/Books";
import Jobs from "./Pages/Jobs";

function App() {


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
            <Route path="/add-blog" element={<AddBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/books" element={<Books />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
