import useFetchNews from "../Hooks/UseFetchNews";
import NewsCard from "../Components/NewsCard";
import Header from "../Components/Header";

const Books = () => {
   
    const {news: {bookNews}, loading} = useFetchNews("books")



    return (
         <div>
            <Header/>
         </div>
    )
}

export default Books;