import axios from 'axios';

const BASE_URL = 'https://mockapi.io/api/v1'; 

export const fetchOrders = async (userId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/orders?userId=${userId}`);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch orders');
  }
};

export const createOrder = async (order: { productId: string; quantity: number; userId: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, order);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create order');
  }
}

