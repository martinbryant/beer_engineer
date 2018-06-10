import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers/reducer';

const middleware = composeWithDevTools(applyMiddleware(
    reduxImmutableStateInvariant()
))

export default function configureStore(initialState) {
    return createStore(reducer, initialState, middleware);
}