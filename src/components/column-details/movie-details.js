import React from 'react';

function MovieDetails(props) {
  return (
    <>
      <h3>Results from The Movie DB API</h3>
      <ul className="movies-results">
        {props.data.map((movie, idx) => {
          return (
            <li key={idx}>
              <p><span>{movie.title}</span> was relased on {movie.released_on}. Out of {movie.total_votes} total votes, {movie.title} has an average vote of {movie.average_votes} and a popularity score of {movie.popularity}.</p>
              <img src={movie.image_url} alt={movie.title} />
              <p>{movie.overview}</p>
            </li>
          );
        })}
      </ul>
    </>
  );

}

export default MovieDetails;
