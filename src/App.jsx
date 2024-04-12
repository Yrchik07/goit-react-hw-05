
import { NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import css from "./App.module.css"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import clsx from "clsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";


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
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>

  )
}

export default App



































