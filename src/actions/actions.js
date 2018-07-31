import {
    GET_BEER_LIST_BY_NAME_STARTED,
    GET_BEER_LIST_BY_NAME_SUCCESS,
    GET_BEER_LIST_BY_NAME_FAILURE,
    TOGGLE_FAVOURITE
} from './constants';

export const getBeerListByNameStarted = searchTerm => ({
    type: GET_BEER_LIST_BY_NAME_STARTED,
    searchTerm
})

export const getBeerListByNameSuccess = beerList => ({
    type: GET_BEER_LIST_BY_NAME_SUCCESS,
    beerList
})

export const getBeerListByNameFailure = error => ({
    type: GET_BEER_LIST_BY_NAME_FAILURE,
    error
})

export const toggleFavourite = beer => ({
    type: TOGGLE_FAVOURITE,
    beer
})



