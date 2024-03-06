import React,{useState,useEffect} from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./style.css";
const apiLink = 'https://course-api.com/react-tours-project';


function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);
  
  const removeTour=(id) => {
    const leftTours = tours.filter((tour) => tour.id !== id);
    setTours(leftTours);
  };

  const fetchTours = async () =>{
    setLoading(true);

    try{  const response = await fetch(apiLink);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch(error){
      setLoading(false);
      console.log(error)
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading){
  return (
    <main>
      <Loading />
    </main>
  );
}
if(tours.length === 0)
{
return(
  <main>
    <div className="title">
      <h1>No tours left</h1>
      <button className="refresh" onClick={()=> fetchTours ()}> Refresh </button>
    </div>
  </main>
)
}
return (
  <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
)
}

export default App;
