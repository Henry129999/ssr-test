import React from 'react';
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
import { matchRoutes } from "react-router-config";
import { Route } from 'react-router-dom';
import routes from '../routes';
import { Provider } from 'react-redux';
import getStore from '../client/store';

const render = (req) => {
  console.log('req.path', req.path);
  const store = getStore();
  /** 根据路由的路径，往store中添加数据 */
  // 匹配路由下的所有组件
  const matchedRoutes = matchRoutes(routes, req.path);
  console.log('matchedRoutes', matchedRoutes);
  // 让matchRoutes里面的所有组件，对应的loadData都执行一次

  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          { routes.map(item => <Route {...item} />) }
        </div>
      </StaticRouter>
    </Provider>
  );
  return (`<html lang="utf-8"><header><link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /><title>ssr</title></header><body><div id="root">${content}</div></body><script src="index.js"></script></html>`);
};

export default render;
