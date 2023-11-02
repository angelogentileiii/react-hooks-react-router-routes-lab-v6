import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directorData, setDirectorData] = useState([]);

  useEffect(()=> {
    fetch(`http://localhost:4000/directors`)
    .then(response => response.json())
    .then(returnedData => {
      setDirectorData(returnedData)
    })
  },[])

  const displayedDirectors = directorData.map((director)=> {
    const {id, name, movies} = director;
      const directedMovies = movies.map((movie, index)=> {
        return (
        <ul key={index}>
          <li>{movie}</li>
        </ul>
        )
      })
    return (
      <article key={id}>
        <h2>{name}</h2>
        {directedMovies}
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
        {/* What component should go here? */}
      </header>
      <main>
        <h1>Directors Page</h1>
        {displayedDirectors}
        {/* Director info here! */}
      </main>
    </>
  );
};

export default Directors;
