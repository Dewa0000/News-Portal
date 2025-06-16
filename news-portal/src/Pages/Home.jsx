import Header from "../Components/Header";
import NewsCard from "../Components/NewsCard";
import useFetchNews from "../Hooks/UseFetchNews"; // adjust path accordingly
import { useState } from "react";

const Home = () => {
  const { news: blogs, loading } = useFetchNews(); // no category = all blogs
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // Optimistically remove deleted blog from list
          window.location.reload(); // safest way unless you add refetch
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
            <NewsCard
              key={blog._id}
              blog={blog}
              isAdmin={isAdmin}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
