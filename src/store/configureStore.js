import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import { apiCalls } from '../middleware/api-calls';
import { localStorageMid } from '../middleware/local-storage';

import reducer from '../reducers/reducer';

const middleware = composeWithDevTools(applyMiddleware(
    reduxImmutableStateInvariant(),
    apiCalls,
    localStorageMid
))

export default function configureStore(initialState) {
    return createStore(reducer, initialState, middleware);
}