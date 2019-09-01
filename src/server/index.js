import React from 'react';
const express = require('express');
const app = express();
const port = 3000;

import utils from './utils';

// 服务器请求静态文件，就去根目录public中寻找
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(utils(req));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));