import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import MovieCard from "../components/MovieCard";

function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/`)
    .then(response => response.json())
    .then(returnedData => {
      setMovieData(returnedData)
    })
  }, []);

  const movieList = movieData.map((movie) => {
    const {id} = movie
    return (
        <MovieCard key={id} movie={movie} />
    )
  })

  return (
    <>
      <header>
        <NavBar />
        {/* What component should go here? */}
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;
