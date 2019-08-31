import React from 'react';
import { Route } from 'react-router-dom';
import Home from './client/containers/Home/index';
import Login from './client/containers/Login/index';

export default (
  <div>
    <Route path="/" exact component={Home}></Route>
    <Route path="/login" exact component={Login}></Route>
  </div>
)