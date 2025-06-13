import logo from "../assets/logo.png";

const Header = () => {
    return (
      <header className="bg-gray-900 text-white flex items-center justify-center p-6 shadow-md">
        {/* Logo Section */}
        <img src={logo} alt="NewsPortal Logo" className="h-14 w-auto object-contain mr-4 rounded-lg" />
        
        {/* Text Section */}
        <div className="text-left">
          <h1 className="text-4xl font-inter font-bold tracking-wide">Hustle & Hiccups</h1>
          <p className="text-md text-gray-300 mt-1 italic">Your daily dose of tech & startup insights</p>
        </div>
      </header>
    );
};

export default Header;
