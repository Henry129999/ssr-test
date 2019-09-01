import React from 'react';
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const render = (store, routes, req) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          { routes.map(item => <Route {...item} />) }
        </div>
      </StaticRouter>
    </Provider>
  );
  return `<html lang="utf-8"><header><link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /><title>ssr</title></header><body><div id="root">${content}</div></body><script src="index.js"></script></html>`;
};

export default render;
