import React from 'react';

function MovieCard(props) {
  const { movie } = props;
  return (
    <div>
      <h2>{movie.Title}</h2>
      <ul>
        <li><strong>Year:</strong> {movie.Year}</li>
        <li><strong>Rated:</strong> {movie.Rated}</li>
        <li><strong>Released:</strong> {movie.Released}</li>
        <li><strong>Runtime:</strong> {movie.Runtime}</li>
        <li><strong>Genre:</strong> {movie.Genre}</li>
        <li><strong>Director:</strong> {movie.Director}</li>
        <li><strong>Writer:</strong> {movie.Writer}</li>
        <li><strong>Actors:</strong> {movie.Actors}</li>
        <li><strong>Plot:</strong> {movie.Plot}</li>
        <li><strong>Language:</strong> {movie.Language}</li>
        <li><strong>Country:</strong> {movie.Country}</li>
        <li><strong>Awards:</strong> {movie.Awards}</li>
        <li><strong>IMDb Rating:</strong> {movie.imdbRating}</li>
        <li><strong>IMDb Votes:</strong> {movie.imdbVotes}</li>
      </ul>
    </div>
  );
}

export default MovieCard;
