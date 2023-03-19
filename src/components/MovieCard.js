import React from 'react';

function MovieCard(props) {
  const { movie } = props;
  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.Poster !== 'N/A' ? (
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
            <strong>Director:</strong> {movie.Director}
          </li>
          <li>
            <strong>Actors:</strong> {movie.Actors}
          </li>
          <li>
            <strong>Website:</strong> <a href={movie.Website}>{movie.Website}</a>
          </li>
            <li>
              <strong>Price:</strong> {movie.Price}
            </li>
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;
