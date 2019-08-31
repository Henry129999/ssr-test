import React from 'react';
import ReactDom from 'react-dom';

import Home from './containers/Home/index';

ReactDom.hydrate(<Home />, document.getElementById('root'));