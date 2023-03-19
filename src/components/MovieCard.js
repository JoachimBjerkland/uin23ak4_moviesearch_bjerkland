import React from 'react';

function MovieCard({ movie }) {
  const { Title, Year, Type, Poster, Genre, Director, Actors, Website } = movie;

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img src={Poster} alt={`${Title} Poster`} />
      </div>
      <div className="movie-card-content">
        <h2>{Title}</h2>
        <p>
          <strong>Year:</strong> {Year}
        </p>
        <p>
          <strong>Type:</strong> {Type}
        </p>
        <p>
          <strong>Genre:</strong> {Genre}
        </p>
        <p>
          <strong>Director:</strong> {Director}
        </p>
        <p>
          <strong>Actors:</strong> {Actors}
        </p>
        <p>
          <strong>Website:</strong> <a href={Website}>{Website}</a>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
