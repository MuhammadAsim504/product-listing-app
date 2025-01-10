import axios from 'axios';

const BASE_URL = 'https://mockapi.io/api/v1'; 

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    const user = response.data.find(
      (u: any) => u.email === email && u.password === password
    );
    if (!user) throw new Error('Invalid email or password');
    return user; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};