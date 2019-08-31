import React from 'react';
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
import Routes from '../routes';

const render = (req) => {
  const content = ReactDOMServer.renderToString(<StaticRouter location={req.path} context={{}}>{Routes}</StaticRouter>);
  return (`<html lang="utf-8"><header><title>ssr</title></header><body><div id="root">${content}</div></body><script src="index.js"></script></html>`);
};

export default render;
