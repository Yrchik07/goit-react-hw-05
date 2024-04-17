import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader/Loader';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));

const App = () => {
  return (
    <div>
      <header>
        <Suspense fallback={<Loader />}>
          <Navigation />
        </Suspense>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
