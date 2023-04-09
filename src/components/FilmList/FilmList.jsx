import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmList = ({ SearchMovies }) => {
  const location = useLocation();
  return (
    <>
      {SearchMovies.length <= 0 ? (
        <p>Enter some movie.</p>
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

FilmList.propTypes = {
  SearchMovies: PropTypes.array.isRequired,
};

export default FilmList;
