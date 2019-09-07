import React from 'react';
import Header from "./client/components/Header";
import { renderRoutes } from "react-router-config";
import {actionGetLoginStatus} from "./client/action/user";

// props.route.routes 接受的是当前层级的路由的url
const App = (props) => {
  return (
    <div>
      <Header />
      { renderRoutes(props.route.routes) }
    </div>
  )
};

App.loadData = (store) => {
  return store.dispatch(actionGetLoginStatus());
};

export default App;