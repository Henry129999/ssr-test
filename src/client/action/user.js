export const ADD_NAME = 'ADD_NAME';
export const ADD_NEWS_LIST = 'ADD_NEWS_LIST';
export const USER_LOGIN = 'USER_LOGIN';

export const addName = text => {
  return {
    type: 'ADD_NAME',
    data: text,
  }
};

export const userLoginStatus = data => {
  return {
    type: 'USER_LOGIN',
    data: data,
  }
};

const newsList = (list) => {
  return {
    type: 'ADD_NEWS_LIST',
    data: list,
  }
};

export const getUserInfo = () => {
  // http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE
  return (dispatch, getState, instanceAxios) => {
    return instanceAxios.get('/api/news.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        if (res) {
          dispatch(newsList((res.data || {}).data || []));
        }
      })
  }
};

export const actionLogin = () => {
  return (dispatch, getState, instanceAxios) => {
    return instanceAxios.get('/api/login.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        if (res) {
          dispatch(userLoginStatus(true));
        }
      })
  }
};

export const actionLogout = () => {
  return (dispatch, getState, instanceAxios) => {
    return instanceAxios.get('/api/logout.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        if (res) {
          dispatch(userLoginStatus(false));
        }
      })
  }
};

export const actionGetLoginStatus = () => {
  return (dispatch, getState, instanceAxios) => {
    return instanceAxios.get('/api/isLogin.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        if (res.data.data.login) {
          dispatch(userLoginStatus(true))
        } else {
          dispatch(userLoginStatus(false))
        }
        return res.data || {};
      })
  }
};

export const actionGetTranslationList = () => {
  return (dispatch, getState, instanceAxios) => {
    return instanceAxios.get('/api/translations.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        return res.data || {};
      })
  }
};
