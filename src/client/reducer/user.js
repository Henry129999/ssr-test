import {
  ADD_NAME,
  ADD_NEWS_LIST,
  USER_LOGIN,
} from '../action/user';

const user = (state = {
  name: 'huang',
  newsList: [],
}, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.data,
      };
    case 'ADD_NEWS_LIST':
      return {
        ...state,
        newsList: action.data,
      };
    case 'USER_LOGIN':
      return {
        ...state,
        login: action.data,
      };
    default:
      return state
  }
};

export default user;
