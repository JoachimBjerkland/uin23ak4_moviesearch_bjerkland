import React, { useState, useEffect } from 'react';

function MovieCard(props) {
  const {
    Title,
    Year,
    Poster,
    Type,
    imdbID,
  } = props;

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=60a8d1f4&plot=full`);
      const data = await response.json();
      setMovieDetails(data);
    };
    fetchMovieDetails();
  }, [imdbID]);

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {Poster !== 'N/A' && <img src={Poster} alt={Title} />}
      </div>
      <div className="movie-details">
        <h2 className="movie-title">{Title}</h2>
        <ul className="movie-metadata">
          <li>
            <strong>Year:</strong> {Year}
          </li>
          <li>
            <strong>Type:</strong> {Type}
          </li>
          <li>
            <strong>IMDb ID:</strong> {imdbID}
          </li>
          {movieDetails && (
            <>
              <li>
                <strong>IMDb Rating:</strong> {movieDetails.imdbRating}
              </li>
              <li>
                <strong>Rated:</strong> {movieDetails.Rated}
              </li>
              <li>
                <strong>Runtime:</strong> {movieDetails.Runtime}
              </li>
              <li>
                <strong>Genre:</strong> {movieDetails.Genre}
              </li>
              <li>
                <strong>Director:</strong> {movieDetails.Director}
              </li>
              <li>
                <strong>Writer:</strong> {movieDetails.Writer}
              </li>
              <li>
                <strong>Actors:</strong> {movieDetails.Actors}
              </li>
              <li>
                <strong>Plot:</strong> {movieDetails.Plot}
              </li>
              <li>
                <strong>Language:</strong> {movieDetails.Language}
              </li>
              <li>
                <strong>Awards:</strong> {movieDetails.Awards}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;
