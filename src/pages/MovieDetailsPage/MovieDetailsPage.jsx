import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { requestMovieDetailsById } from '../../services/api';
import MovieCast from '../../components/MovieCast/MovieCast';
import {Routes, Route} from 'react-router-dom';
const MovieDetailsPage = () => {
  const { id } = useParams();
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
      {movieDetails && (
        <div>
              <Link to='/'>⬅ Go back</Link>
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
          <h2>{movieDetails.title}</h2>
          <p>User score: {movieDetails.vote_average}</p>
          <h3>Overview </h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
          <section>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to='cast'>Cast</Link>
            </li>
            <Routes>
            <Route path="/movie/:id/cast" element={<MovieCast movieDetails={movieDetails}/>} />

            </Routes>

            <li>
              <Link to='reviews'>Reviews</Link>
            </li>
          </ul>
          </section>
  
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
