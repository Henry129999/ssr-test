import React from 'react';
import Header from "./client/components/Header";
import { renderRoutes } from "react-router-config";

// props.route.routes 接受的是当前层级的路由的url
const App = (props) => {
  return (
    <div>
      <Header />
      { renderRoutes(props.route.routes) }
    </div>
  )
};

export default App;