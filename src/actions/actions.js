import {
    GET_BEER_LIST_BY_NAME_STARTED,
    GET_BEER_LIST_BY_NAME_SUCCESS,
    GET_BEER_LIST_BY_NAME_FAILURE,
    FAVOURITE_BEER
} from './constants';

export const getBeerListByNameStarted = () => ({
    type: GET_BEER_LIST_BY_NAME_STARTED
})

export const getBeerListByNameSuccess = beerList => ({
    type: GET_BEER_LIST_BY_NAME_SUCCESS,
    beerList
})

export const getBeerListByNameFailure = error => ({
    type: GET_BEER_LIST_BY_NAME_FAILURE,
    error
})

export const favouriteBeer = id => ({
    type: FAVOURITE_BEER,
    id
})



