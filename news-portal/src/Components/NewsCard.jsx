import { Link } from "react-router-dom";

const NewsCard = ({ blog, onDelete }) => {
  if (!blog) return null;

  const { _id, title, snippet } = blog;

  return (
    <div className="relative border border-gray-300 p-6 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-md hover:shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-opacity-30">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700 text-sm leading-relaxed">{snippet}</p>

      <div className="flex justify-between mt-4 items-center">
        <Link to={`/blogs/${_id}`} className="text-blue-500 hover:underline">
          Read More →
        </Link>
        <button
          onClick={() => onDelete(_id)}
          className="text-red-500 text-sm border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
