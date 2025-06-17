import useFetchNews from "../Hooks/UseFetchNews";
import NewsCard from "../Components/NewsCard";
import Header from "../Components/Header";

const Books = () => {
   
    const {news: bookNews, loading} = useFetchNews("books")



    return (
         <div>
            <Header/>
            {loading ? 
            <p className="text-center">Loading...</p> : 
               bookNews.length === 0 ? 
            <p className="font-bold">No Books Blog Found</p> : 
            <div>
                <NewsCard blog={bookNews} key={bookNews._id}/>
            </div> }
          </div>

    )}
export default Books;