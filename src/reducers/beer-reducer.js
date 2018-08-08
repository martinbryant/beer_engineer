import { combineReducers } from 'redux'

import { ADD_FAVOURITE, DELETE_FAVOURITE } from '../actions/beer-actions'

export const searchedBeers = (state = {}, action) => (
    (action.type.includes('SET_BEERS'))
        ? action.payload
        : state
)

export const favouriteBeers = (state = {}, action) => {
    switch (action.type) {
        case ADD_FAVOURITE:
            return {
                ...state,
                ...action.payload
            }
        case DELETE_FAVOURITE:
            const { [action.payload]: value, ...rest } = state
            return rest

        default: return state
    }

}

const beers = combineReducers({
    searchedBeers,
    favouriteBeers
})

export default beers