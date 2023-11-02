import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams();
  // console.log(params.id)
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(response => response.json())
    .then(returnedData => {
      setMovie(returnedData)
    })
  }, [movieId])

  const {title, time, genres} = movie;

  if(!title) {
    return <h1>Just a second...</h1>
  }

  // console.log(movie.genres)

  const movieGenres = genres.map((genre, index) => {
    return (
      <li key={index}>
        <span>{genre}</span>
      </li>
    )
  })


  return (
    <>
      <header>
        <NavBar />
        {/* What component should go here? */}
      </header>
      <main>
        <h1>{title}</h1>
        <p>{time}</p>
        {movieGenres}
      </main>
    </>
  );
};

export default Movie;
