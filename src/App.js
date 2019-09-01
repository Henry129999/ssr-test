import React from 'react';
import Header from "./client/components/Header";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

const App = (props) => {
  return (
    <div>
      <Header />
      { renderRoutes(props.route.routes) }
    </div>
  )
};

export default App;