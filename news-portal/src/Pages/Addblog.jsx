import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams(); // 🧠 blog ID (if editing)
  const navigate = useNavigate();

  // 📌 Fetch existing blog if editing
  useEffect(() => {
    if (id) {
      fetch(`https://news-portal-jzcd.onrender.com/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const blog = data.blog;
          setTitle(blog.title);
          setSnippet(blog.snippet);
          setBody(blog.body);
          setCategory(blog.category);
        })
        .catch((err) => {
          console.error("Failed to load blog:", err.message);
          setError("Failed to fetch blog for editing.");
        });
    }
  }, [id]);

  // 🔁 Handles both Create & Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to post or update a blog.");
      return;
    }

    try {
      const method = id ? "PUT" : "POST";
      const url = id
        ? `https://news-portal-jzcd.onrender.com/blogs/${id}`
        : "https://news-portal-jzcd.onrender.com/add-blog";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, snippet, body, category, imageURL }),
      });

      if (response.ok) {
        setSuccess(true);
        navigate("/"); // ✅ redirect to homepage after submit
      } else {
        const data = await response.json();
        throw new Error(data.error || "Blog action failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{id ? "Edit Blog" : "Add New Blog"}</h2>

      {success && (
        <div className="text-green-600 mb-3">
          Blog {id ? "updated" : "posted"} successfully!
        </div>
      )}
      {error && <div className="text-red-600 mb-3">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Snippet"
          className="w-full p-2 border border-gray-300 rounded"
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Body"
          className="w-full p-2 border border-gray-300 rounded"
          rows="5"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full p-2 border border-gray-300 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {id ? "Update Blog" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
