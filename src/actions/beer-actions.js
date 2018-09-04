export const BEERS_BY_NAME = 'BEERS_BY_NAME'
export const BEER_RANDOM = 'BEER_RANDOM'

export const FETCH_BEERS_BY_NAME = 'FETCH_BEERS_BY_NAME'
export const FETCH_BEER_RANDOM = 'FETCH_BEER_RANDOM'
const SET_BEERS = '_SET_BEERS'
export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const DELETE_FAVOURITE = 'DELETE_FAVOURITE'

export const fetchBeerByName = query => ({
    type: FETCH_BEERS_BY_NAME,
    payload: query,
    meta: {
        feature: BEERS_BY_NAME
    }
})

export const fetchBeerRandom = numberOfBeers => ({
    type: FETCH_BEER_RANDOM,
    payload: numberOfBeers,
    meta: {
        feature: BEER_RANDOM
    }
})

export const setBeers = (beers, feature) => ({
    type: `${feature}${SET_BEERS}`,
    payload: beers,
    meta: {
        feature,
        normalizeKey: 'id'
    }
})

export const toggleFavourite = id => ({
    type: TOGGLE_FAVOURITE,
    payload: id.toString()
})

export const addFavourite = beer => ({
    type: ADD_FAVOURITE,
    payload: beer
})

export const deleteFavourite = id => ({
    type: DELETE_FAVOURITE,
    payload: id
})