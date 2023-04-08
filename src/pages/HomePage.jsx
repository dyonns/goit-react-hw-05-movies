import { Link, useLocation } from 'react-router-dom';
const Home = ({ movies }) => {
  // const location = useLocation();
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
export default Home;
