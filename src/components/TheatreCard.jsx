import { useState } from "react"
import "../component-styles/TheatreCard.css"
export default function TheatreCard() {
    const URL = "https://www.freetestapi.com/api/v1/movies"
    const [movies, setMovies] = useState(null)
    let card={name:"",img:"",dis:""}
  
    const fetchMovies = async () => {
      let response = await fetch(URL)
      let data = await response.json()
      setMovies(data.slice(0, 3))
    };
  
    
    if (!movies) {
      fetchMovies()
      return <h2>Loading...</h2>
    }
  
    
    return(
        <>
        <div className="cardContainer">
        {movies.map((movie, index) => (
           <div className="card"  key={index}>
                <img src={movie.poster} alt="" />
                <h1>{movie.title}</h1>
                <p>{movie.plot}</p>
                <button onClick={()=>{alert(`you have clicked the Read More button of ${movie.title} movie card`)}}>Read More</button>
            </div>))}
        </div>
        </>
    )
}