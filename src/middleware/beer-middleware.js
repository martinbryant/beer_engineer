import { BEERS_BY_NAME, BEER_RANDOM, setBeers, TOGGLE_FAVOURITE, deleteFavourite, addFavourite } from '../actions/beer-actions'
import { apiRequest, API_ERROR, API_SUCCESS } from '../actions/api-actions';
import { setLoader, setNotification } from '../actions/ui-actions';

export const beerMiddleware = ({ getState }) => next => action => {
    next(action)
    const byNameUrl = 'https://api.punkapi.com/v2/beers/1?beer_name='
    const randomUrl = 'https://api.punkapi.com/v2/beers/random'
    let url
    const { feature } = action.meta || ''
    const { payload, type } = action;
    if (type.includes('FETCH')) {
        let url
        if (type.includes(BEERS_BY_NAME)) {
            url = `${byNameUrl}${payload}`
        }
        if (type.includes(BEER_RANDOM)) {
            url = randomUrl
        }
        next(apiRequest({}, 'GET', url, feature))
        next(setLoader(true, feature))
    }
    if (type.includes(API_SUCCESS)) {
        next(setBeers(payload, feature))
        next(setLoader(false, feature))
    }
    if (type.includes(API_ERROR)) {
        next(setNotification(payload, feature))
        next(setLoader(false, feature))
    }
    if (type.includes(TOGGLE_FAVOURITE)) {
        Object.keys((getState().favouriteBeers)).includes(payload)
            ? next(deleteFavourite(payload))
            : next(addFavourite({
                [payload]: getState().searchedBeers[payload]
            }))
    }
}

