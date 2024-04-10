
import { NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import css from "./App.module.css"
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import clsx from "clsx";
const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const App = () => {
  return (
    <div>
    <header>
      <nav className={css.nav}>
        <NavLink className={getNavLinkClassName} to="/">
          Home
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/movies">
        Movies
        </NavLink>
        {/* <NavLink className={getNavLinkClassName} to="/movies/:movieId">
          Products
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/movies/:movieId/cast">
          Search
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/movies/:movieId/reviews">
          Search
        </NavLink> */}
      </nav>
    </header>
    {/* URL -> localhost:5123/products/4 */}
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>

  )
}

export default App



































