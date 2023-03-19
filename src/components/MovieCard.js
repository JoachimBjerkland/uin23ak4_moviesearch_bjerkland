import React from 'react';

function MovieCard(props) {
  const { movie } = props;
  return (
    <div>
      <h2>{movie.Title}</h2>
      {movie.Poster !== 'N/A' ? (
        <div>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ) : (
        <div>No poster available</div>
        //Ettersom det er ihvertfall 1 film uten poster, så er denne lagt til for å vise frem dette.
      )}
      <ul>
        <li>
          <strong>Year:</strong> {movie.Year}
        </li>
        <li>
          <strong>Type:</strong> {movie.Type}
        </li>
      </ul>
    </div>
  );
}

export default MovieCard;
