import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { requestPhotosByQuery } from './services/api';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';


const App = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const[query, setQuery]=useState('');
  const[page, setPage]=useState(1)
  const [resultsHasMore, setResultsHasMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query.length) return;

    const fetchPhotosByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await requestPhotosByQuery(query,page);
        if (data.results.length === 0 ) {
          setResultsHasMore(false); 
        } else {
        if (page === 1) {
        setResults(data.results);
      } else {
        setResults(prevResults => [...prevResults, ...data.results]);
      }}
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotosByQuery();
  }, [query,page]);

  const onSubmit = (searchTerm) => {
    setQuery(searchTerm);
    setPage(1);
    setResultsHasMore(true)
  };
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const openModal = (image) => {
        setSelectedImage(image.urls.regular);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
      };

  return (
    <div>
      <SearchBar onSubmit={onSubmit}/>
      {isError&&<ErrorMessage/>}
      {results&&<ImageGallery results={results} openModal={openModal}/>}
      {isLoading&&<Loader/>}
      {results&&resultsHasMore && <LoadMoreBtn onClick={handleLoadMore}/>}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default App;

