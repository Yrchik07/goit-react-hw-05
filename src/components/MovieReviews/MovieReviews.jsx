
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieDetailsReviews} from '../../services/api'; // Потрібно створити цю функцію в файлі api.js

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const reviewsData = await requestMovieDetailsReviews(id);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Failed to get reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews !== null && reviews.results.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
