import axios from 'axios';
// const ACCESS_KEY = '77237b7601c733583eaf3dc2196f1b0c';
const ACCESS_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzIzN2I3NjAxYzczMzU4M2VhZjNkYzIxOTZmMWIwYyIsInN1YiI6IjY2MTQ0MWMxMzNhNTMzMDE3ZDg2MjQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w3lC1LFryVgYddnbuQyS1Xqf10uEvVf_SKXpqxgVXTA'; 
const API_URL = 'https://api.themoviedb.org/3';

const requestPhotosByQuery = async (query, page) => {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: {
        query: query,
        page: page,
        per_page: 10, 
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};

export { requestPhotosByQuery };

