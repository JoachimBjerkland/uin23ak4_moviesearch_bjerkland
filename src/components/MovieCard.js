import React from 'react';

function MovieCard(props) {
  const { movie } = props;
  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.Poster !== '' ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div>No poster available</div>
        )}
      </div>
      <div className="movie-details">
        <h2 className="movie-title">{movie.Title}</h2>
        <ul className="movie-metadata">
          <li>
            <strong>Year:</strong> {movie.Year}
          </li>
          <li>
            <strong>Type:</strong> {movie.Type}
          </li>
          <li>
            <strong>Genre:</strong> {movie.Genre}
          </li>
          <li>
            <strong>Actors:</strong> {movie.Actors}
          </li>
          <li>
            <strong>Plot:</strong> {movie.Plot}
          </li>
          <li>
            <strong>Language:</strong> {movie.Language}
          </li>
            <li>
              <strong>Awards:</strong> {movie.Awards}
            </li>
            <li>
              <strong>Ratings:</strong> {movie.Ratings}
            </li>
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;
