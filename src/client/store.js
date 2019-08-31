import todoApp from "./reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';

const getStore = () => {
  return createStore(todoApp, applyMiddleware(thunk));
};

// getStore是一个函数，每次执行这个函数都会生成一个新的store
export default getStore;
