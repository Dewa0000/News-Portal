import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">ByteNews</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/tech" className="hover:underline">Tech</Link>
          <Link to="/startups" className="hover:underline">Startups</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
