const Startups = () => {
  const startupNews = [
    {
      title: "🚀 Zepto – India’s 10-Minute Delivery Unicorn",
      description: "Zepto raises $1.4B valuation, making it one of the fastest-growing startups.",
    },
    {
      title: "🔗 Polygon – The Indian Web3 Giant",
      description: "Powering Ethereum scaling solutions and reshaping blockchain technology.",
    },
    {
      title: "💳 Zolve – Instant U.S. Bank Accounts for Indians",
      description: "Helping Indians access financial services globally with ease.",
    },
    {
      title: "💵 CRED Raises $250M",
      description: "Fintech giant secures massive funding at a $6.4B valuation.",
    },
    {
      title: "🚗 Ola Electric’s EV Gigafactory",
      description: "Ola secures $300M to build the world’s biggest electric vehicle plant.",
    },
    {
      title: "📢 “We Built India’s First AI Resume Scanner in a Garage!”",
      description: "Meet the founders of ResuMe, an AI-driven hiring tool.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">🚀 Startup Ecosystem Updates</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startupNews.map((news, index) => (
          <div key={index} className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-gray-900">{news.title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Startups;
