import React from 'react';
import Home from './client/containers/Home/index';
import Login from './client/containers/Login/index';
import App from './App';

const routes = [{
  path: '/',
  component: App,
  loadData: App.loadData,
  key: 'app',
  routes: [
    {
      path: "/",
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home',
    }, {
      path: "/login",
      component: Login,
      exact: true,
      key: 'login',
    },
  ]
}];



export default routes;