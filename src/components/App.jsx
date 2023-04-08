import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from 'pages/HomePage';
import Movies from 'pages/MoviesPage';
import Nav from './Nav/Nav';
import { getMoviesList } from '../servises/FilmAPI';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const fetchMovies = async () => {
      try {
        const data = await getMoviesList();
        if (data.results.length === 0) {
          throw new Error('No Movies data');
        }
        const movieTitles = data.results
          .map(movie => ({
            id: movie.id,
            title: movie.title || movie.name,
          }))
          .slice(0, 20);
        setMovies(movieTitles);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />

        <Route path="*" element={<Home movies={movies} />} />
      </Routes>
    </>
  );
};
