import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}?limit=100`);
  return response.data.products;
};