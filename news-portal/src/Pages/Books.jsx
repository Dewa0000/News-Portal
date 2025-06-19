import useFetchNews from "../Hooks/UseFetchNews";
import NewsCard from "../Components/NewsCard";
import Header from "../Components/Header";

const Books = () => {
  const { news: bookNews, loading } = useFetchNews("books");

  return (
    <div>
      <Header />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : bookNews.length === 0 ? (
        <p className="font-bold text-center text-red-500">No Books Blog Found</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookNews.map((item) => (
            <NewsCard blog={item} key={item._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
