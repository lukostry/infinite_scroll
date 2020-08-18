import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';

import { configureStore } from './store';
import { OfferDetails } from './components';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
          <Router>
            <Switch>
              <Route exact path="/">
                <App />
              </Route>
              <Route exact path="/offer/:id">
                <OfferDetails />
              </Route>
            </Switch>
          </Router>
      </RecoilRoot>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
