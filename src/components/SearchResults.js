import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import stringSimilarity from 'string-similarity';

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

  const fetchSearchResults = async (formattedQuery) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${formattedQuery}+james+bond&type=movie&apikey=60a8d1f4&plot=full`
    );
    const data = await response.json();

    const searchResults = data.Search;
    if (searchResults) {
      const scores = searchResults.map((movie) => stringSimilarity.compareTwoStrings(searchQuery, movie.Title));
      const sortedResults = searchResults.slice().sort((a, b) => scores[searchResults.indexOf(b)] - scores[searchResults.indexOf(a)]);
      setResults(sortedResults);
    } else {
      setResults([]);
    }
  };

  const handleSearchInputChange = async (event) => {
    setSearchQuery(event.target.value);

    if (event.target.value.length >= 3) {
      const formattedQuery = event.target.value.trim().replace(/\s+/g, '+');
      await fetchSearchResults(formattedQuery);
    } else {
      fetchDefaultSearchResults();
    }
  };

  const handleSearchFormSubmit = async (event) => {
    event.preventDefault();
    if (searchQuery.length >= 3) {
      const formattedQuery = searchQuery.trim().replace(/\s+/g, '+');
      await fetchSearchResults(formattedQuery);
    } else {
      fetchDefaultSearchResults();
    }
  };

  return (
    <div className="search-results-container">
      <form onSubmit={handleSearchFormSubmit}>
        <label htmlFor="search-input">Search for James Bond movies:</label>
        <input
          type="text"
          id="search-input"
          value={searchQuery}
          onChange={handleSearchInputChange}
          minLength={3}
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-card-container">
        {results &&
          results.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              Title={movie.Title}
              Year={movie.Year}
              imdbID={movie.imdbID}
              Poster={
                movie.Poster !== 'N/A'
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
