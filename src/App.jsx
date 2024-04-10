
import { NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import clsx from "clsx";
import css from "./App.module.css"
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
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
        <NavLink className={getNavLinkClassName} to="/movies/:movieId">
          Products
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/movies/:movieId/cast">
          Search
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/movies/:movieId/reviews">
          Search
        </NavLink>
      </nav>
    </header>
    {/* URL -> localhost:5123/products/4 */}
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>

  )
}

export default App

































// import { useEffect, useState } from 'react';
// import SearchBar from './components/SearchBar/SearchBar';
// import { requestPhotosByQuery } from './services/api';
// import Loader from './components/Loader/Loader';
// import ErrorMessage from './components/ErrorMessage/ErrorMessage';
// import ImageGallery from './components/ImageGallery/ImageGallery'
// import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
// import ImageModal from './components/ImageModal/ImageModal';


// const App = () => {
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const[query, setQuery]=useState('');
//   const[page, setPage]=useState(1)
//   const [resultsHasMore, setResultsHasMore] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     if (!query.length) return;

//     const fetchPhotosByQuery = async () => {
//       try {
//         setIsLoading(true);
//         const data = await requestPhotosByQuery(query,page);
//         if (data.results.length === 0 ) {
//           setResultsHasMore(false); 
//         } else {
//         if (page === 1) {
//         setResults(data.results);
//       } else {
//         setResults(prevResults => [...prevResults, ...data.results]);
//       }}
//       } catch (error) {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchPhotosByQuery();
//   }, [query,page]);

//   const onSubmit = (searchTerm) => {
//     setQuery(searchTerm);
//     setPage(1);
//     setResultsHasMore(true)
//   };
//   const handleLoadMore = () => {
//     setPage(prevPage => prevPage + 1);
//   };
//   const openModal = (image) => {
//         setSelectedImage(image.urls);
//         setIsModalOpen(true);
//       };
    
//       const closeModal = () => {
//         setSelectedImage(null);
//         setIsModalOpen(false);
//       };

//   return (
//     <div>
//       <SearchBar onSubmit={onSubmit}/>
//       {isError&&<ErrorMessage/>}
//       {results&&<ImageGallery results={results} openModal={openModal}/>}
//       {isLoading&&<Loader/>}
//       {results&&resultsHasMore && <LoadMoreBtn onClick={handleLoadMore}/>}
//       <ImageModal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         selectedImage={selectedImage}
//       />
//     </div>
//   );
// };

// export default App;


