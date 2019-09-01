import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from '../routes';
import { Provider } from 'react-redux';
import { getClientStore } from './store';
import {renderRoutes} from "react-router-config";

const App = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <div>
        { renderRoutes(routes) }
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDom.hydrate(<App />, document.getElementById('root'));