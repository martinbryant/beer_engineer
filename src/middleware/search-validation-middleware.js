import {
    VALIDATE_SEARCH_TERM,
    setSearchValidationError
} from "../actions/ui-actions";

const searchValidationMiddleware = state => next => action => {
    next(action);
    action.type === VALIDATE_SEARCH_TERM &&
        next(setSearchValidationError(validateSearch(action.payload)));
};

const validateSearch = searchTerm => {
    const alphaNumericSpaceAndDash = /^[\w\-\s]+$/;
    return alphaNumericSpaceAndDash.test(searchTerm)
        ? ""
        : "Alpha Numeric characters only";
};

export default searchValidationMiddleware;
