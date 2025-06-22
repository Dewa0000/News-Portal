import { useState } from "react";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    const token = localStorage.getItem("token"); // 🟢 Fetch token from localStorage

    if (!token) {
      setError("You must be logged in to post a blog.");
      return;
    }

    try {
      const response = await fetch("https://news-portal-jzcd.onrender.com/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` // 🔒 Send token
        },
        body: JSON.stringify({ title, snippet, body, category }),
      });

      if (response.ok) {
        setTitle("");
        setSnippet("");
        setBody("");
        setCategory("");
        setSuccess(true);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Blog creation failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>

      {success && (
        <div className="text-green-600 mb-3">Blog posted successfully!</div>
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
