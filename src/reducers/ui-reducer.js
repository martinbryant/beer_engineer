import {
    SET_LOADER,
    SET_NOTIFICATION,
    REMOVE_NOTIFICATION,
    UPDATE_NO_OF_RANDOM_BEERS,
    SET_SEARCH_VALIDATION_ERROR
} from "../actions/ui-actions";
import { combineReducers } from "redux";

export const isLoading = (state = false, action) =>
    action.type.includes(SET_LOADER) ? action.payload : state;

export const notifications = (state = {}, action) => {
    switch (true) {
        case action.type.includes(SET_NOTIFICATION):
            return action.payload;
        case action.type.includes(REMOVE_NOTIFICATION):
            return {};
        default:
            return state;
    }
};

export const noOfRandomBeers = (state = "5", action) => {
    switch (true) {
        case action.type.includes(UPDATE_NO_OF_RANDOM_BEERS):
            return action.payload;
        default:
            return state;
    }
};

export const searchValidationError = (state = null, action) =>
    action.type === SET_SEARCH_VALIDATION_ERROR ? action.payload : state;

const ui = combineReducers({
    isLoading,
    notifications,
    noOfRandomBeers,
    searchValidationError
});

export default ui;
