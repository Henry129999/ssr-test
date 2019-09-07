import axios from 'axios';

const instance = (req) => {
  return axios.create({
    method: 'get', // default
    baseURL: 'http://47.95.113.63/ssr',
    headers: {
      cookie: req.get('cookie'),
    },
    params: {
      ID: 12345,
      secret: 'PP87ANTIPIRATE',
    }
  })
};

export default instance;