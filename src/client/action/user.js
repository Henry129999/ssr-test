export const ADD_NAME = 'ADD_NAME';
export const ADD_NEWS_LIST = 'ADD_NEWS_LIST';

export const addName = text => {
  return {
    type: 'ADD_NAME',
    data: text,
  }
};

const newsList = (list) => {
  return {
    type: 'ADD_NEWS_LIST',
    data: list,
  }
};

export const getUserInfo = (server) => {
  // http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE
  return (dispatch, getState, instanceAxios) => {
    console.log('getState', getState()); // 获取store中的state
    return instanceAxios.get('/api/news.json?secret=PP87ANTIPIRATE')
      .then(res=> {
        if (res) {
          dispatch(newsList((res.data || {}).data || []));
        }
      })
  }
};
