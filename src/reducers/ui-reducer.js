import { SET_LOADER } from '../actions/ui-actions'
import { combineReducers } from 'redux';

export const isLoading = (state = false, action) => (
    action.type.includes(SET_LOADER)
        ? action.payload
        : state
)

const ui = combineReducers({
    isLoading
})

export default ui