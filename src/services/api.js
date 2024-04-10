import axios from 'axios';
// const ACCESS_KEY = '77237b7601c733583eaf3dc2196f1b0c';
// const ACCESS_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzIzN2I3NjAxYzczMzU4M2VhZjNkYzIxOTZmMWIwYyIsInN1YiI6IjY2MTQ0MWMxMzNhNTMzMDE3ZDg2MjQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w3lC1LFryVgYddnbuQyS1Xqf10uEvVf_SKXpqxgVXTA'; 
// const API_URL = 'https://api.themoviedb.org/3';

// const requestPhotosByQuery = async (query, page) => {
//   try {
//     const response = await axios.get(`${API_URL}/search/movie`, {
//       params: {
//         query: query,
//         page: page,
//         per_page: 10, 
//       },
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${ACCESS_KEY}`,
//       },
//     });
    
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching photos:', error);
//     throw error;
//   }
// };

// export { requestPhotosByQuery };

const ACCESS_KEY = 'vmpj73WjzxomTLySKIx4P3K6GH4i7_4rkUcVcC9a4NU'; 
const API_URL = 'https://api.unsplash.com';

const requestPhotosByQuery = async (query, page) => {
  try {
    const response = await axios.get(`${API_URL}/search/photos`, {
      params: {
        query: query,
        page: page,
        per_page: 10, 
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};

export { requestPhotosByQuery };