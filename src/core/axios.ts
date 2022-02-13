import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://www.abibliadigital.com.br/api',
});

instance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('Authorization');
    const Authorization = `Baerer ${token}`;
    if (token) {
      config.headers = {
        Authorization,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
