import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import FilmList from '../components/FilmList/FilmList';
import { getSearchMoviesList } from '../servises/FilmAPI';

const Movies = () => {
  const [SearchMovies, setSearchMovies] = useState([]);
  const [search] = useSearchParams();

  const query = search.get('query');
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getSearchMoviesList(query);
        if (data.results.length === 0) {
          throw new Error('No Movies data');
        }
        const movies = data.results
          .map(movie => ({ id: movie.id, title: movie.title }))
          .slice(0, 20);
        setSearchMovies(movies);
      } catch (error) {
        throw new Error('No Movies data');
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <>
      <SearchForm />
      <FilmList SearchMovies={SearchMovies} />
    </>
  );
};
export default Movies;

// sfc
