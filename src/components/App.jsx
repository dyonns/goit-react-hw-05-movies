import { Route, Routes, Link } from 'react-router-dom';
import Home from 'pages/HomePage';
import Movies from 'pages/MoviesPage';
import Nav from './Nav/Nav';

export const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
