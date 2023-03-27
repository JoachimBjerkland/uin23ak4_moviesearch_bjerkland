import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

export default function SearchResults() {
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
        <label htmlFor="search-input">Søk på James Bond filmer:</label>
        <input
          type="text"
          id="search-input"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-card-container">
        {searchQuery.length >= 3 && results &&
          results.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} results={results} />
          ))}
      </div>
    </div>
  );
}

//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://javascript.info/async-await
//Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
//Kilde: https://developer.mozilla.org/en-US/docs/Web/API/Response/json
//Kilde: https://legacy.reactjs.org/docs/hooks-effect.html
//Kilde: https://docs.couchbase.com/sdk-api/couchbase-node-client-3.1.0/searchquery.js.html
