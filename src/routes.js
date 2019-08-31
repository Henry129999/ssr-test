import React from 'react';
import { Route } from 'react-router-dom';
import Home from './client/containers/Home/index';

export default (
  <div>
    <Route path="/" exact component={Home}>

    </Route>
  </div>
)