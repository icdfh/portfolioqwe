import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // базовый URL вашего API
});

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // или где вы храните свой токен
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
