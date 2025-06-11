import { useState, useEffect } from "react";

const useFetchNews = (category) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://news-portal-jzcd.onrender.com/blogs");
        const data = await response.json();
        console.log(data);
        setNews(data.blog);
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
