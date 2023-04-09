import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ movies }) => {
  return (
    <>
      <h2>PopularFilms</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Home.propTypes = {
  movie: PropTypes.array,
};
export default Home;
