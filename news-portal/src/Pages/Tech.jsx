const Tech = () => {
  const techNews = [
    {
      title: "🚀 GPT-5 is Coming?",
      description: "OpenAI hints at the next-gen AI model with even more advanced reasoning capabilities.",
    },
    {
      title: "🔍 DeepMind’s New Breakthrough",
      description: "AI can now simulate human-like creativity in art & music.",
    },
    {
      title: "🤖 AI in Healthcare",
      description: "Chatbots diagnosing diseases with 95% accuracy – the future of telemedicine?",
    },
    {
      title: "📌 Apple’s Vision Pro",
      description: "The first wave of mixed-reality headsets is here! Is it the future of computing?",
    },
    {
      title: "⚡ Samsung Galaxy S25 Ultra Leak",
      description: "200MP Camera, AI-enhanced photography & 3-day battery life!",
    },
    {
      title: "🎮 Sony’s PlayStation 6 Rumors",
      description: "AI-powered NPCs and immersive VR experiences?",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">🚀 Latest Tech Trends</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techNews.map((news, index) => (
          <div key={index} className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-gray-900">{news.title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
