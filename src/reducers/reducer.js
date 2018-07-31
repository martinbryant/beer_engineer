import { combineReducers } from 'redux';

import {
    GET_BEER_LIST_BY_NAME_STARTED,
    GET_BEER_LIST_BY_NAME_SUCCESS,
    GET_BEER_LIST_BY_NAME_FAILURE,
    TOGGLE_FAVOURITE
} from '../actions/constants'

const favouriteList = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            return state.find(beer => beer.id === action.beer.id)
                ? state.filter(beer => beer.id !== action.beer.id)
                : [
                    ...state,
                    action.beer
                ]
        default:
            return state
    }
}

const beerList = (state = [], action) => {
    switch (action.type) {
        case GET_BEER_LIST_BY_NAME_SUCCESS:
            return action.beerList
        case GET_BEER_LIST_BY_NAME_FAILURE:
            return []
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
        case GET_BEER_LIST_BY_NAME_STARTED:
        case GET_BEER_LIST_BY_NAME_SUCCESS:
            return ''
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