const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const app = express();
import Home from '../client/containers/Home'
const port = 3000;

const content = ReactDOMServer.renderToString(<Home />);

// 服务器请求静态文件，就是根目录public中无寻找
app.use(express.static('public'));

app.get('/', (req, res) => res.send(`<html lang="utf-8"><header><title>ssr</title></header><body><div id="root">${content}</div></body><script src="index.js"></script></html>`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));