import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Routes>
      <Route path="/moviecard/:id" element={<MovieCard />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
