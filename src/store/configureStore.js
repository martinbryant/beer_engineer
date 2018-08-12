import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import apiMiddleware from '../middleware/api-middleware'
import beerMiddleware from '../middleware/beer-middleware'
import normalizeMiddleware from '../middleware/normalize-middleware'
import beers from '../reducers/beer-reducer'
import ui from '../reducers/ui-reducer'

const reducer = combineReducers({
    beers,
    ui
})

const middleware = composeWithDevTools(applyMiddleware(
    reduxImmutableStateInvariant(),
    beerMiddleware,
    apiMiddleware,
    normalizeMiddleware
))

export default function configureStore(initialState) {
    return createStore(reducer, initialState, middleware);
}