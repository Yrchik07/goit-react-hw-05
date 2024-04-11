import { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { NavLink} from 'react-router-dom';
import { requestMoviesByTrending } from '../../services/api';
// import MoviesPage from '../MoviesPage/MoviesPage';
// import NotFoundPage from '../NotFoundPage/NotFoundPage';

const HomePage = () => {
  const [results, setResults] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        const data = await requestMoviesByTrending();
        setResults(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsError(false);
        }
    }

    fetchMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {isError&&<ErrorMessage/>}
      
      {Array.isArray(results) &&
        results.map((result) => {
          return (
            <li key={result.id}>
             <NavLink  to={`/movie/${result.id}`}>  
             {result.title}
        </NavLink>

            </li>
          );
        })}
    </div>
  );
};

export default HomePage;
