import React from 'react';
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, matchPath } = require('react-router-dom');
import { Route } from 'react-router-dom';
import routes from '../routes';
import { Provider } from 'react-redux';
import getStore from '../client/store';

const render = (req) => {
  const store = getStore();
  /** 根据路由的路径，往store中添加数据 */
    // inside a request
  const matchRoutes = [];
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match && route.loadData) matchRoutes.push(route);
  });
  // 让matchRoutes里面的所有组件，对应的loadData都执行一次
  console.log('matchRoutes', matchRoutes);

  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          { routes.map(item => <Route {...item} />) }
        </div>
      </StaticRouter>
    </Provider>
  );
  return (`<html lang="utf-8"><header><title>ssr</title></header><body><div id="root">${content}</div></body><script src="index.js"></script></html>`);
};

export default render;
