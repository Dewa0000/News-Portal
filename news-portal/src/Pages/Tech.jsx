import useFetchNews from "../Hooks/UseFetchNews";
import NewsCard from "../Components/NewsCard";
import Header from "../Components/Header";

const Tech = () => {
  const { news: techBlogs, loading } = useFetchNews("tech");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">🚀 Latest Tech Blogs</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : techBlogs.length === 0 ? (
        <p className="text-center text-red-500">No tech blogs found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techBlogs.map((blog) => (
            <NewsCard key={blog._id} blog={blog} isAdmin={false} onDelete={() => { }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tech;
