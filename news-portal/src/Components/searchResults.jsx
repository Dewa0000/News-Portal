import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://your-render-backend-url.onrender.com";
    fetch(`${backendUrl}/blogs`)
      .then(res => res.json())
      .then(data => {
        setBlogs(data.blog);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog?.title?.toLowerCase().includes(query)
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Search Results for: <span className="text-blue-700">"{query}"</span>
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : filteredBlogs.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredBlogs.map(blog => (
            <NewsCard
              key={blog._id}
              blog={blog}
              onDelete={() => { }} // If delete is not needed, remove this
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
