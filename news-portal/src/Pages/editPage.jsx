import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    snippet: "",
    body: "",
    category: "",
  });

  // Fetch the existing blog data
  useEffect(() => {
    fetch(`https://news-portal-jzcd.onrender.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm(data.blog);
      })
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://news-portal-jzcd.onrender.com/blogs/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update blog");
      }

      const result = await res.json();
      console.log("Updated:", result);
      navigate("/"); // or navigate(`/blogs/${id}`)
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>
      <form className="w-full max-w-xl" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          name="snippet"
          placeholder="Snippet"
          value={form.snippet}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <textarea
          name="body"
          placeholder="Body"
          value={form.body}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded h-40"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
