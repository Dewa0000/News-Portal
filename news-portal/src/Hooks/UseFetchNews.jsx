const useFetchNews = (category) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      try {
        const response = await fetch(`${backendUrl}/blogs`);
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
