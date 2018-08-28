import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import { loadFromLocalStorage } from './actions/data-actions';

const store = configureStore();

store.dispatch(loadFromLocalStorage('favouriteBeers', 'INIT'))

const root = document.getElementById('root')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    root);
