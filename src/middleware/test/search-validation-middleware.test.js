import searchValidationMiddleware from "../search-validation-middleware";
import {
    VALIDATE_SEARCH_TERM,
    SET_SEARCH_VALIDATION_ERROR
} from "../../actions/ui-actions";

describe("searchValidationMiddleware", () => {
    let next, dispatch, middleware;
    beforeEach(() => {
        next = jest.fn();
        middleware = searchValidationMiddleware({ dispatch })(next);
    });
    it("should call next for any other actions", () => {
        const action = {
            type: "IGNORED_ACTION"
        };
        middleware(action);
        expect(next).toHaveBeenCalledWith(action);
    });
    it("should call next with search error if non alpha numeric search term", () => {
        const action = {
            type: VALIDATE_SEARCH_TERM,
            payload: "search.term"
        };
        const expected = {
            type: SET_SEARCH_VALIDATION_ERROR,
            payload: "Alpha Numeric characters only"
        };
        middleware(action);
        expect(next).toHaveBeenCalledWith(expected);
    });
    it("should call next with search error empty if alpha numeric search term", () => {
        const action = {
            type: VALIDATE_SEARCH_TERM,
            payload: "searchterm"
        };
        const expected = {
            type: SET_SEARCH_VALIDATION_ERROR,
            payload: ""
        };
        middleware(action);
        expect(next).toHaveBeenCalledWith(expected);
    });
    it("should call next with search error empty if alpha numeric with dash search term", () => {
        const action = {
            type: VALIDATE_SEARCH_TERM,
            payload: "search-term"
        };
        const expected = {
            type: SET_SEARCH_VALIDATION_ERROR,
            payload: ""
        };
        middleware(action);
        expect(next).toHaveBeenCalledWith(expected);
    });
    it("should call next with search error empty if alpha numeric with space search term", () => {
        const action = {
            type: VALIDATE_SEARCH_TERM,
            payload: "search term"
        };
        const expected = {
            type: SET_SEARCH_VALIDATION_ERROR,
            payload: ""
        };
        middleware(action);
        expect(next).toHaveBeenCalledWith(expected);
    });
});
