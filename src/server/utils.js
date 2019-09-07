import React from 'react';
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux';

const render = (store, routes, req, context) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          { renderRoutes(routes) }
        </div>
      </StaticRouter>
    </Provider>
  );
  return `<html lang="utf-8">
<header>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<title>ssr</title>
</header>
<body>
<div id="root">${content}</div>
</body>
<script>window.context=${JSON.stringify({state: store.getState()})}</script>
<script src="index.js"></script>
</html>`;
};

export default render;
