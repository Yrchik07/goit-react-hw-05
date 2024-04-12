// components/CastPage.jsx

import { useParams } from "react-router-dom";
import { requestMovieDetailsById } from "../../services/api";
import { useEffect, useState } from "react";

const MovieCast = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetailsCast = await requestMovieDetailsById(id);
        setMovieDetails(movieDetailsCast);
      } catch (error) {
        console.error('Failed to get a movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);
  return (
      <ul>
        {movieDetails.production_companies.map(cast => (
            <li key={cast.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${cast.logo_path}`} width="100" alt={cast.name} />
          </li>
        ))}
      </ul>
  );
};

export default MovieCast;
