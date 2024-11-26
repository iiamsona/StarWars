import axios from 'axios';

export const axiosStaticClient = axios.create({
  // TODO: env setup for "prod" and "dev"
  baseURL: 'https://cdn-dev.frisson.events'
});
