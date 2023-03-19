import React from 'react';

function MovieCard(props) {
  const { movie } = props;
  return (
    <div>
      <h2>{movie.Title}</h2>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <ul>
        {Object.entries(movie).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCard;
