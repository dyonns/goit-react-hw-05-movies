import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const FilmList = ({ SearchMovies }) => {
  const location = useLocation();
  return (
    <>
      {SearchMovies.length <= 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {SearchMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default FilmList;
