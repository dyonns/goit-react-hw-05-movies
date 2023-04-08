import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../servises/FilmAPI';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const [details, setDetails] = useState('');
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();
  // const location = useLocation();
  const handleGoBack = () => {
    // const prevPageLoacation = location.state;
    navigate(-1);
  };
  const { movieId } = useParams();

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
      <button title={'GoBack'} onClick={handleGoBack}>
        GoBack
      </button>
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
              <li>{genr.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
