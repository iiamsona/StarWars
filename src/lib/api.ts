import type { InternalAxiosRequestConfig } from 'axios';
import { Cookies } from 'react-cookie';
import axios from 'axios';

export const axiosClient = axios.create({
  // TODO: env setup for "prod" and "dev"
  baseURL: 'https://d7cf-37-252-86-106.ngrok-free.app',
  headers: {
    'x-api-version': 'admin',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420'
  }
});

axiosClient.interceptors.request.use(
  (config) => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const updatedConfig = {
      ...config,
      headers: {
        ...config.headers
      }
    } as InternalAxiosRequestConfig;

    if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`;
      updatedConfig.headers['x-api-version'] = 'admin';
      updatedConfig.headers['Content-Type'] = 'application/json';
    }

    return updatedConfig;
  },
  (e) => Promise.reject(e)
);

axiosClient.interceptors.response.use(
  (config) => {
    return config;
  },
  async (e) => {
    if (e.response.status === 401) {
      // TODO: handle case of status code 401
    }
  }
);
