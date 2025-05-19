import Header from "../Components/Header";
import Adbanner from "../Components/Adbanner";
import NewsCard from "../Components/NewsCard";
import useFetchNews from "../Hooks/UseFetchNews";

const Home = () => {
  const { news, loading } = useFetchNews("general");

  return (
    <div>
      <Header />
      <Adbanner />
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading ? <p>Loading...</p> : news.map((article, index) => (
          <NewsCard key={index} title={article.title} description={article.description} link={article.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;
