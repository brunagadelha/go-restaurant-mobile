import axios from 'axios';

const api = axios.create({
  baseURL: 'http://a766d477bf10.ngrok.io',
});

export default api;
