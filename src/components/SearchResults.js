import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchDefaultSearchResults = async () => {
    const response = await fetch(
      'https://www.omdbapi.com/?s=james+bond&type=movie&apikey=60a8d1f4&plot=full'
    );
    const data = await response.json();
    setResults(data.Search);
  };

  useEffect(() => {
    fetchDefaultSearchResults();
  }, []);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=60a8d1f4&plot=full`
      );
      const data = await response.json();
      setResults(data.Search);
    };
    if (searchQuery.length >= 3) {
      fetchSearchResults();
    } else {
      fetchDefaultSearchResults();
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFormSubmit = async (event) => {
    event.preventDefault();
    if (searchQuery.length >= 3) {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=60a8d1f4&plot=full`
      );
      const data = await response.json();
      setResults(data.Search);
    } else {
      fetchDefaultSearchResults();
    }
  };

  return (
    <div className="search-results-container">
      <form onSubmit={handleSearchFormSubmit}>
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
        {results &&
          results.map((movie) => (
            <MovieCard key={movie.imdbID} Title={movie.Title} Year={movie.Year} imdbID={movie.imdbID} Poster={movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://via.placeholder.com/150x225'} Type={movie.Type} />
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
