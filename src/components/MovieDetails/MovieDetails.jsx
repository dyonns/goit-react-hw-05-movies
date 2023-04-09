import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../servises/FilmAPI';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const [details, setDetails] = useState('');
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();
  const location = useLocation();

  const cameBack = location.state?.from ?? '/';

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
      <Link to={cameBack}>Go Back</Link>

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
            <Link to={`/movies/${movieId}/cast`} state={{ from: cameBack }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`} state={{ from: cameBack }}>
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
