import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import SearchResults from './components/SearchResults';

export default function App() {
  return (
    <Routes>
      <Route path="/moviecard/:id" element={<MovieCard />} />
      <Route path="/*" element={<SearchResults />} />
    </Routes>
  );
}