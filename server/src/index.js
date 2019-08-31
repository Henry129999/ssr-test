const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const app = express();
import Home from './containers/Home/index'
const port = 3000;

const content = ReactDOMServer.renderToString(<Home />);

app.get('/', (req, res) => res.send(`
  <html lang="utf-8">
    <header><title>ssr</title></header>
    <body>${content}</body>
  </html>  
  `));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));