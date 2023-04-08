import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'servises/FilmAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getMovieReviews(movieId);
      setReviews(data.results);
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length <= 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <ul>
                <li>{review.author}</li>
                <li>{review.content}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
