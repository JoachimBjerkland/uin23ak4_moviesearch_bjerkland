import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function SearchResults() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=60a8d1f4&type=movie`);
      const data = await response.json();
      const filteredResults = data.Search ? data.Search.filter((movie) => movie.Title.includes('James Bond')) : [];
      setResults(filteredResults);
    };
    if (searchQuery.length >= 3 || searchQuery === '') {
      fetchData();
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setInputValue(event.target.value);
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://www.omdbapi.com/?s=james+bond&apikey=60a8d1f4&type=movie`);
    const data = await response.json();
    const filteredResults = data.Search ? data.Search.filter((movie) => movie.Title.includes('James Bond')) : [];
    setResults(filteredResults);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search-input">Search for movies:</label>
        <input
          type="text"
          id="search-input"
          value={inputValue}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-results">
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;