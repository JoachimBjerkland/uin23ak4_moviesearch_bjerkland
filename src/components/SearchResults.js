import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function SearchResults() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.omdbapi.com/?s=james+bond&type=movie&apikey=60a8d1f4&plot=full`);
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
        <label htmlFor="search-input">Search for James Bond movies:</label>
        <input
          type="text"
          id="search-input"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-card-container">
        {results &&
          results.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} results={results} />
          ))}
      </div>
    </div>
  );
}

export default SearchResults;
