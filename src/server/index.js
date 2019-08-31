import React from 'react';
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
import Routes from '../routes';

const express = require('express');
const app = express();
const port = 3000;

// 服务器请求静态文件，就是根目录public中无寻找
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('path', req.path);
  const content = ReactDOMServer.renderToString(<StaticRouter path={req.path} context={{}}>{Routes}</StaticRouter>);
  res.send(`<html lang="utf-8"><header><title>ssr</title></header><body><div id="root">${content}</div></body><script src="index.js"></script></html>`)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));