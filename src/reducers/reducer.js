import { combineReducers } from 'redux';

import {
    GET_BEER_LIST_BY_NAME_STARTED,
    GET_BEER_LIST_BY_NAME_SUCCESS,
    GET_BEER_LIST_BY_NAME_FAILURE,
    SET_BEER_AS_FAVOURITE
} from '../actions/constants'

const favouriteList = (state = [], action) => {
    switch (action.type) {
        case SET_BEER_AS_FAVOURITE:
            return state.includes(action.id)
                ? state.filter(id => id != action.id)
                : [
                    ...state,
                    action.id
                ]
        default:
            return state
    }
}

const beerList = (state = [], action) => {
    switch (action.type) {
        case GET_BEER_LIST_BY_NAME_SUCCESS:
            return action.beerList
        case SET_BEER_AS_FAVOURITE:
            return state.map(beer => (beer.id === action.id)
                ? {
                    ...beer,
                    isFavourite: (beer.isFavourite ? false : true)
                }
                : beer)
        default:
            return state
    }
}

const loadingStatus = (state = 'initial', action) => {
    switch (action.type) {
        case GET_BEER_LIST_BY_NAME_STARTED:
            return 'loading'
        case GET_BEER_LIST_BY_NAME_SUCCESS:
            return 'success'
        case GET_BEER_LIST_BY_NAME_FAILURE:
            return 'error'
        default:
            return state
    }
}

const loadingError = (state = '', action) => {
    switch (action.type) {
        case GET_BEER_LIST_BY_NAME_FAILURE:
            return action.error
        default:
            return state

    }
}

const reducer = combineReducers({
    favouriteList,
    beerList,
    loadingStatus,
    loadingError
})

export default reducer;