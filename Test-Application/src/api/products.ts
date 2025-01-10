import axios from 'axios';

const BASE_URL = 'https://mockapi.io/api/v1'; 

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch products');
  }
};