import { SET_BEER_AS_FAVOURITE } from '../actions/constants'

export const localStorageMid = ({ getState }) => next => action => {
    next(action);
    (action.type == SET_BEER_AS_FAVOURITE)
        && localStorage.setItem('favouriteBeers', JSON.stringify(getState().favouriteBeers))
}