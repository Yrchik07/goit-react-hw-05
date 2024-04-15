import { RiUserLocationFill } from 'react-icons/ri';
import { NavLink, Route, Routes } from 'react-router-dom';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
const location = RiUserLocationFill();

const MovieList = ({ results }) => {
  return (
    <ul>
      {Array.isArray(results) &&
        results.map(result => {
          return (
            <li key={result.id}>
              <NavLink state={location} to={`/movie/:${result.id}`}>
                {result.title}
              </NavLink>
            </li>
          );
        })}
      <Routes>
        <Route path="/movie/:id/*" element={<MovieDetailsPage />} />
      </Routes>
    </ul>
  );
};

export default MovieList;
