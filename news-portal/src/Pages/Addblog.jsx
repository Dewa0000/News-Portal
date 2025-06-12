import { useState } from "react";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    try {
      const response = await fetch("https://news-portal-jzcd.onrender.com/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, snippet, body }),
      });

      if (response.ok) {
        setTitle("");
        setSnippet("");
        setBody("");
        setSuccess(true);
      } else {
        throw new Error("Blog creation failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      {success && (
        <div className="text-green-600 mb-3">Blog posted successfully!</div>
      )}
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
