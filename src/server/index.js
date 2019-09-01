import React from 'react';
const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const port = 3000;

import utils from './utils';
import { getStore } from "../client/store";
import {matchRoutes} from "react-router-config";
import routes from "../routes";

// 服务器请求静态文件，就去根目录public中寻找
app.use(express.static('public'));

// proxy代理
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    console.log('req.url', req.url);
    return '/ssr/api' + req.url;
  }
}));

app.get('*', (req, res) => {
  const store = getStore();
  // /** 根据路由的路径，往store中添加数据 */
  //   // 匹配路由下的所有组件
  // const matchedRoutes = matchRoutes(routes, req.path) || [];
  // // 让matchRoutes里面的所有组件，对应的loadData都执行一次
  // const promises = [];
  // matchedRoutes.forEach(item => {
  //   if (item.route.loadData) promises.push(item.route.loadData(store))
  // });
  //
  // Promise.all(promises)
  //   .then(() => {
      res.send(utils(store, routes, req));
    // });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));