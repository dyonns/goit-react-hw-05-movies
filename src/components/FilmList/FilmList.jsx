import { Link, useLocation } from 'react-router-dom';
const FilmList = ({ SearchMovies }) => {
  // const location = useLocation();
  return (
    <>
      <ul>
        {SearchMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FilmList;
