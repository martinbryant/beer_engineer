import { TOGGLE_FAVOURITE } from '../actions/constants'

export const localStorageMid = ({ getState }) => next => action => {
    next(action);
    (action.type === TOGGLE_FAVOURITE)
        && localStorage.setItem('favouriteBeers', JSON.stringify(getState().favouriteList))
}