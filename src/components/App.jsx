import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
// import Home from 'pages/HomePage';
// import Movies from 'pages/MoviesPage';
import Nav from './Nav/Nav';
import { getMoviesList } from '../servises/FilmAPI';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('pages/HomePage'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Movies = lazy(() => import('pages/MoviesPage'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
      <Suspense fallback={<h1>Loadding</h1>}>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home movies={movies} />} />
        </Routes>
      </Suspense>
    </>
  );
};
