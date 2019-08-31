import React from 'react';
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
import Routes from '../routes';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import todoApp from "../client/reducer";

const render = (req) => {
  const store = createStore(todoApp, applyMiddleware(thunk));

  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  );
  return (`<html lang="utf-8"><header><title>ssr</title></header><body><div id="root">${content}</div></body><script src="index.js"></script></html>`);
};

export default render;
