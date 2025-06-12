import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
 
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  function handleSearchItem(e){
     e.preventDefault();
     if(searchItem.trim()){
        navigate(`/search?q=${searchItem.trim()}`)
     setSearchItem("");
     }
     
  }

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">H&H</Link>
        <div  className="flex items-center space-x-4">
          <div className="searchContainer flex">
            <form onSubmit={handleSearchItem} role="search" id="form" className="flex items-center">
              <input
                type="search"
                id="query"
                value={searchItem}
                name="q"
                onChange={(e) => setSearchItem(e.target.value)}
                placeholder="Search..."
                className="px-2 py-1 rounded text-black"
              />
              <button type="submit" className="ml-2 px-3 py-1 bg-white text-blue-700 rounded">Go</button>
            </form>
          </div>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/tech" className="hover:underline">Tech</Link>
          <Link to="/startups" className="hover:underline">Startups</Link>
          <Link to="/add-blog" className="hover:underline">Add Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
