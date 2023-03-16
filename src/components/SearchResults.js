import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function SearchResults(props) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=60a8d1f4`);
        const data = await response.json();
        setResults(data.Search);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    if (searchQuery !== '') {
      fetchData();
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div>
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
      <div>
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
