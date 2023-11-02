import {Link} from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import {useState, useEffect } from 'react'

function MovieCard({movie}) {
  const {title} = movie;
  return (
    <article>
        <h2>{title}</h2>
        <Link to={`/movie/${movie.id}`}>View Info</Link>
        {/* What should go here? */}
    </article>
  );
};

export default MovieCard;