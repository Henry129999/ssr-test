import todoApp from "./reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import clientAxios from './request';
import serverAxios from '../server/request';

export const getStore = (req) => {
  return createStore(todoApp, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
};

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(todoApp, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
