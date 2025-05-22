import { useLocation } from "react-router-dom";

function searchResults(){
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q")

    return(
       <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Search Results for {query}</h2>
       </div>

    )
}

export default searchResults;