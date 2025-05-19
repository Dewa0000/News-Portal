const NewsCard = ({ title, description, link }) => {
  return (
    <div className="relative border border-gray-300 p-6 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-md hover:shadow-2xl transform transition duration-300 hover:scale-105 hover:bg-opacity-30">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-3 inline-block text-white font-semibold py-2 px-4 rounded bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
        🔗 Read More
      </a>
    </div>
  );
};



export default NewsCard;