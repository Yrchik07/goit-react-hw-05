import axios from 'axios';

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
