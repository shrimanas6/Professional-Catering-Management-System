import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (credentials: { username: string; password: string }) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData: {
  username: string;
  password: string;
  name: string;
  cateringName: string;
  contactNumber: string;
}) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const getOrders = async () => {
  const response = await api.get('/orders');
  return response.data;
};

export const createOrder = async (orderData: any) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export const updateOrder = async (orderId: string, orderData: any) => {
  const response = await api.put(`/orders/${orderId}`, orderData);
  return response.data;
};

export default api;