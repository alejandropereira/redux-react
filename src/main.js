import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import VisibleCards from './components/VisibleCards';
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as localStorage from './localStorage';

import * as reducers from './reducers';
reducers.routing = routerReducer;

import { Provider } from 'react-redux';

const store = createStore(combineReducers(reducers), localStorage.get());
const history = syncHistoryWithStore(browserHistory, store);

const run = () => {
  const state = store.getState();
  localStorage.set(state, ['cards', 'decks']);

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="/deck/:deckId" component={VisibleCards} />
        </Route>
      </Router>
    </Provider>, document.getElementById('root'));
};

run();

store.subscribe(run);
