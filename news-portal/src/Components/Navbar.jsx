import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path as necessary

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
    <nav className="bg-[#293929] text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl flex items-center font-inter"><img src={logo} className="h-10 w-auto object-contain mr-4 rounded-lg"></img><span className="font-inter">H&H</span></Link>
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
          <Link to="/" className="text-white hover:text-primary-600 text-base font-medium leading-normal transition-colors">Home</Link>
          <Link to="/tech" className="text-white hover:text-primary-600 text-base font-medium leading-normal transition-colors">Tech</Link>
          <Link to="/jobs" className="text-white hover:text-primary-600 text-base font-medium leading-normal transition-colors">Jobs</Link>
          <Link to="/books" className="text-white hover:text-primary-600 text-base font-medium leading-normal transition-colors">Books</Link>
          <Link to="/add-blog" className="text-white hover:text-primary-600 text-base font-medium leading-normal transition-colors">Add Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
