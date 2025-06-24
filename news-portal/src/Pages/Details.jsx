import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Components/Header";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/blogs/${id}`);
        const data = await res.json();
        setBlog(data.blog);
        setLikes(data.blog.likes || 0);

      } catch (err) {
        console.error("Error fetching blog details:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleLike = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/blogs/${id}/like`, {
        method: "PUT",
      });

      if (!res.ok) throw new Error("Failed to like blog");

      const data = await res.json();
      setLikes(data.likes);
    } catch (err) {
      console.error("Error liking blog:", err.message);
    }
  };


  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {loading ? (
          <p>Loading...</p>
        ) : blog ? (
          <div>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-500 text-sm">
              Published on {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-600 italic mb-6">{blog.snippet}</p>
            {blog.imageURL && (
              <img
                src={blog.imageURL}
                alt={blog.title}

                className="rounded w-full mb-4"
              />
            )}

            <div className="text-lg text-gray-800 whitespace-pre-line">{blog.body}</div>
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={handleLike}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
              >
                ❤️ Like
              </button>
              <span className="text-gray-700">{likes} {likes === 1 ? "like" : "likes"}</span>
            </div>

          </div>
        ) : (
          <p className="text-red-600">Blog not found.</p>
        )}
      </main>
    </>
  );
};

export default BlogDetails;
