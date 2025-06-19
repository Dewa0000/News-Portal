import NewsCard from "../Components/NewsCard";
import useFetchNews from "../Hooks/UseFetchNews";
import Header from "../Components/Header";

const Jobs = () => {
    
    const {news: jobRoles,loading} = useFetchNews("jobs")

    return (
           <div>
              <Header/>
              {loading ?
                 (<p className="text-center">Loading...</p>) : 
                 jobRoles.length === 0 ? 
                 (<p>No Job Role Found</p>) :
                 (<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobRoles.map((item) => {
                    return <NewsCard blog={item} key={item._id}/>
                 })}
                 </div>)
              }
           </div>
    )
}

export default Jobs;