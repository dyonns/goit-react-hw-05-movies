import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'servises/FilmAPI';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      const data = await getMovieCredits(movieId);
      setCredits(data.cast);
    };
    fetchCredits();
  }, [movieId]);

  return (
    <>
      <ul>
        {credits.map(credit => (
          <li key={credit.id}>
            <ul>
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                  alt="Movie Poster"
                  height={200}
                />
              </li>
              <li>{credit.name}</li>
              <li>{credit.character}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
