import { useState, useEffect } from "react";

const useFetchNews = (category) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=20118df5ef4c4066ab6cfdb263d283cf");
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [category]);

  return { news, loading };
};

export default useFetchNews;
