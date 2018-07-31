import {
    GET_BEER_LIST_BY_NAME_STARTED,
    GET_BEER_LIST_BY_NAME_SUCCESS,
    GET_BEER_LIST_BY_NAME_FAILURE,
    TOGGLE_FAVOURITE,
    NAVIGATE_TO_FAVOURITES
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

export const toggleFavourite = id => ({
    type: TOGGLE_FAVOURITE,
    id
})

export const navigateToFavourites = () => ({
    type: NAVIGATE_TO_FAVOURITES
})



