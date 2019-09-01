import todoApp from "./reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';

export const getStore = () => {
  return createStore(todoApp, applyMiddleware(thunk));
};

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(todoApp, defaultState, applyMiddleware(thunk));
};
