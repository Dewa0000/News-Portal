import { useEffect, useState } from "react";
import Header from "../Components/Header";

import NewsCard from "../Components/NewsCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin,setIsAdmin] = useState(true);

  useEffect(() => {

    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blog);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        } else {
          console.error("Failed to delete blog");
        }
      })
      .catch((err) => console.error("Error deleting blog:", err));
  };

  return (
    <div>
      <Header />
    
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          blogs.map((blog) => (
            <NewsCard key={blog._id} blog={blog} isAdmin={isAdmin} onDelete = {handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
