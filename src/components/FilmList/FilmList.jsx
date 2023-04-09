import { Link, useLocation } from 'react-router-dom';

const FilmList = ({ SearchMovies, state }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {SearchMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={state}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FilmList;
