import { useState } from "react"
import "./assets/style.css"
import TheatreCard from "./components/TheatreCard"

export default function App() {
  const URL = "https://www.omdbapi.com/?t="
  const API = "&apikey=a93a0e38"

  const [movie1, setMovie1] = useState(null)
  const [movie2, setMovie2] = useState(null)
  const [movie3, setMovie3] = useState(null)

  const fetchMovie = async (title, setMovie) => {
    let response = await fetch(`${URL}${title}${API}`)
    let data = await response.json()
    setMovie({
      name: data.Title,
      img: data.Poster,
      dis: data.Plot
    })
  }

  if (!movie1) {
    fetchMovie("avengers", setMovie1)
    return <h2>Loading Avengers...</h2>
  }
  if (!movie2) {
    fetchMovie("godzilla", setMovie2)
    return <h2>Loading Godzilla...</h2>
  }
  if (!movie3) {
    fetchMovie("king kong", setMovie3)
    return <h2>Loading King Kong...</h2>
  }

  return (
    <>
      <div className="cardContainer">
        <TheatreCard card={movie1} />
        <TheatreCard card={movie2} />
        <TheatreCard card={movie3} />
      </div>
    </>
  );
}
