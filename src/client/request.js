import axios from 'axios';

const instance = axios.create({
  method: 'get', // default
  baseURL: '/',
  params: {
    ID: 12345,
    secret: 'PP87ANTIPIRATE',
  }
});

export default instance;