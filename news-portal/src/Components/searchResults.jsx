
import { useLocation } from "react-router-dom";
import useFetchNews from "../Hooks/UseFetchNews";
import NewsCard from "../Components/NewsCard";

const SearchResults = () => {
  const { search } = useLocation(); // to access ?q=...
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";

  const { news, loading } = useFetchNews("general");

  const filteredNews = news.filter(article =>
    article.title.toLowerCase().includes(query)
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Search Results for: <span className="text-blue-700">"{query}"</span></h2>
      {loading ? (
        <p>Loading...</p>
      ) : filteredNews.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredNews.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              link={article.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
