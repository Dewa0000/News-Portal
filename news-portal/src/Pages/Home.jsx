import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Adbanner from "../Components/Adbanner";
import NewsCard from "../Components/NewsCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
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
    fetch(`http://localhost:3000/blogs/${id}`, {
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
      <Adbanner />
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          blogs.map((blog) => (
            <NewsCard key={blog._id} blog={blog} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
