import React from 'react';
const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');

import utils from './utils';
import { getStore } from "../client/store";
import {matchRoutes} from "react-router-config";
import routes from "../routes";

// 服务器请求静态文件，就去根目录public中寻找
app.use(express.static('public'));

// proxy代理
app.use('/favicon.ico', function(req, res) {
  //设置请求的返回头type,content的type类型列表见上面
  // res.setHeader("Content-Type", contentType);
  //格式必须为 binary 否则会出错
  // console.log('path', __dirname + './images/favicon.png');
  // const content = fs.readFileSync(path.dirname( __dirname + 'images/favicon.png'));
  // res.writeHead(200, "Ok");
  // res.write(content);
  // res.end();
});

// favicon的使用
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    return '/ssr/api' + req.url;
  }
}));

app.get('*', (req, res) => {
  const store = getStore(req);
  /** 根据路由的路径，往store中添加数据 */
    // 匹配路由下的所有组件
  const matchedRoutes = matchRoutes(routes, req.path) || [];
  // 让matchRoutes里面的所有组件，对应的loadData都执行一次
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });

  Promise.all(promises)
    .then(() => {
      const context = {};
      const html = utils(store, routes, req, context);
      if (context.action === 'REPLACE') {
        res.redirect(301, context.url);
      } else if (context.NOT_FOUND) res.status(404);
        res.send(html);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));