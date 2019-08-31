import React from 'react';
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
import Routes from '../routes';
import { Provider } from 'react-redux';
import getStore from '../client/store';

const render = (req) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  );
  return (`<html lang="utf-8"><header><title>ssr</title></header><body><div id="root">${content}</div></body><script src="index.js"></script></html>`);
};

export default render;
