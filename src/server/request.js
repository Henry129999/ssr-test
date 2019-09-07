import axios from 'axios';

const instance = (req) => {
  return axios.create({
    baseURL: 'http://47.95.113.63/ssr',
    headers: {
      cookie: req.get('cookie'),
    }
  })
};

export default instance;