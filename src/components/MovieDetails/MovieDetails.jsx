import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Outlet,
} from 'react-router-dom';
import { getMovieDetails } from '../../servises/FilmAPI';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const [details, setDetails] = useState('');
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const prevPageLocation = location.state;
  const handleGoBack = () => {
    navigate(-1, { state: { prevPageLocation: location } });
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movieId);
      setDetails(data);
      setGenres(data.genres);
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <button onClick={handleGoBack}>GoBack</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt="Movie Poster"
        />
        <div>
          <h1>{details.title}</h1>
          <p>Rating{details.vote_average}</p>
          <h2>Overview</h2>
          <p>{details.overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(genr => (
              <li key={genr.id}>{genr.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>Edditional Information</h3>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`} state={location}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`} state={location}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
