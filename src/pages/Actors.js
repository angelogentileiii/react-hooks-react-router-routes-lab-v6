import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actorData, setActorData] = useState([]);

  useEffect(()=> {
    fetch(`http://localhost:4000/actors`)
      .then(response => response.json())
      .then(returnedData => {
        setActorData(returnedData)
      })
  }, [])

  const displayedActors = actorData.map((actor)=> {
    const {id, name, movies} = actor;
      const eachMovie = movies.map((movie, index)=> {
        return (
          <ul key={index}>
            <li>{movie}</li>
          </ul>
        )
      })
      return (
        <article key={id}>
          <h2>{name}</h2>
          {eachMovie}
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
        <h1>Actors Page</h1>
        {displayedActors}
        {/* Actor info here! */}
      </main>
    </>
  );
};

export default Actors;
