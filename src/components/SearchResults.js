import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function SearchResults() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=james+bond&apikey=60a8d1f4&type=movie&plot=full`);
      const data = await response.json();
      setResults(data.Search);
    };
    if (searchQuery.length >= 3) {
      fetchData();
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-results-container">
      <form>
        <label htmlFor="search-input">Search for movies:</label>
        <input
          type="text"
          id="search-input"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-card-container">
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;