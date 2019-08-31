import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import todoApp from "./reducer";

const store = createStore(todoApp, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </Provider>
);

ReactDom.hydrate(<App />, document.getElementById('root'));