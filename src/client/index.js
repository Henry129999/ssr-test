import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import routes from '../routes';
import { Provider } from 'react-redux';
import { getClientStore } from './store';


const App = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <div>
        { routes.map(item => <Route {...item} />) }
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDom.hydrate(<App />, document.getElementById('root'));