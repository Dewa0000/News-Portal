import { useEffect, useState } from "react";

const useFetchNews = (category) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const backendUrl =
        import.meta.env.VITE_BACKEND_URL ||
        "https://your-render-backend-url.onrender.com";

      try {
        const response = await fetch(`${backendUrl}/blogs`);
        const data = await response.json();

        const blogList = Array.isArray(data.blogs) ? data.blogs : [];

        const filtered = category
          ? blogList.filter(
            (item) =>
              item.category?.toLowerCase() === category.toLowerCase()
          )
          : blogList;

        setNews(filtered);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]); // fallback
      }
      setLoading(false);
    };

    fetchNews();
  }, [category]);

  return { news, loading };
};

export default useFetchNews;
