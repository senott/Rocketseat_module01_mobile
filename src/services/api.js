import axios from 'axios';

const api = axios.create({
  // Android emulator
  // baseURL: 'http://10.0.2.2:3333'
  // iOS
  baseURL: 'http://localhost:3333'
});

export default api;