import { useEffect, useState } from 'react';
import { Link, NavLink, useParams, Routes, Route } from 'react-router-dom';
import { requestMovieDetailsById } from '../../services/api';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
const MovieDetailsPage = () => {
  const {id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetailsData = await requestMovieDetailsById(id);

        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.error('Failed to get a movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {movieDetails !== null && 
        <div>
              <Link to='/'>⬅ Go back</Link>
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
          <h2>{movieDetails.title} ({movieDetails.release_date})</h2>
          <p>User score: {movieDetails.vote_average}</p>
          <h3>Overview </h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
          <section>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to='cast'>Cast</NavLink>
              { <Routes>
            <Route path="cast" element={<MovieCast />} />
            </Routes>
            }

            </li>

            <li>
              <NavLink to='reviews'>Reviews</NavLink>
              { <Routes>
            <Route path="reviews" element={<MovieReviews />} />
            </Routes>
            }

            </li>
           
          </ul>
          </section>
  
        </div>
      }
    </div>
  );
};

export default MovieDetailsPage;
