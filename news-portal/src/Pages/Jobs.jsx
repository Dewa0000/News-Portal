import NewsCard from "../Components/NewsCard";
import useFetchNews from "../Hooks/UseFetchNews";
import Header from "../Components/Header";

const Jobs = () => {
    
    const {news : jobCard, loading} = useFetchNews("jobs")

    return (
           <div>
              <Header/>
           </div>
    )
}

export default Jobs;