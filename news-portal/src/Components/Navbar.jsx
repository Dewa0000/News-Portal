import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Update path if needed

const Navbar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchItem = (e) => {
    e.preventDefault();
    if (searchItem.trim()) {
      navigate(`/search?q=${searchItem.trim()}`);
      setSearchItem("");
      setMenuOpen(false); // Close mobile menu on search
    }
  };

  return (
    <nav className="bg-[#24A3B5] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-2 rounded-lg" />
            <span className="text-xl font-bold">H&H</span>
          </Link>

          {/* Hamburger Menu (Mobile Only) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearchItem} className="flex">
              <input
                type="search"
                placeholder="Search..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className="px-2 py-1 rounded text-black"
              />
              <button
                type="submit"
                className="ml-2 px-3 py-1 bg-white text-blue-700 rounded"
              >
                Go
              </button>
            </form>

            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/tech" className="hover:text-gray-200">Tech</Link>
            <Link to="/jobs" className="hover:text-gray-200">Jobs</Link>
            <Link to="/books" className="hover:text-gray-200">Books</Link>
            <Link to="/add-blog" className="hover:text-gray-200">Add Blog</Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden space-y-4 pb-4">
            <form onSubmit={handleSearchItem} className="flex">
              <input
                type="search"
                placeholder="Search..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className="px-2 py-1 rounded text-black w-full"
              />
              <button
                type="submit"
                className="ml-2 px-3 py-1 bg-white text-blue-700 rounded"
              >
                Go
              </button>
            </form>

            <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
            <Link to="/tech" onClick={() => setMenuOpen(false)} className="block">Tech</Link>
            <Link to="/jobs" onClick={() => setMenuOpen(false)} className="block">Jobs</Link>
            <Link to="/books" onClick={() => setMenuOpen(false)} className="block">Books</Link>
            <Link to="/add-blog" onClick={() => setMenuOpen(false)} className="block">Add Blog</Link>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="block">Login</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)} className="block">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
