import * as reducer from "../ui-reducer";
import {
    setLoader,
    setNotification,
    removeNotification,
    updateNoOfRandomBeers,
    setSearchValidationError
} from "../../actions/ui-actions";

describe("ui reducer", () => {
    describe("isLoading", () => {
        it("returns the initial state", () => {
            const action = {
                type: "init"
            };
            const expected = false;
            const callReducer = reducer.isLoading(undefined, action);
            expect(callReducer).toEqual(expected);
        });
        it("returns the same state for ignored actions", () => {
            const action = {
                type: "init"
            };
            const oldState = true;
            const expected = true;
            const callReducer = reducer.isLoading(oldState, action);
            expect(callReducer).toEqual(expected);
        });
        it("should handle set loader", () => {
            const action = setLoader(true, "FEATURE");
            const oldState = false;
            const expected = true;
            const callReducer = reducer.isLoading(oldState, action);
            expect(callReducer).toEqual(expected);
        });
    });
    describe("notifications", () => {
        it("returns the initial state", () => {
            const action = {
                type: "init"
            };
            const expected = {};
            const callReducer = reducer.notifications(undefined, action);
            expect(callReducer).toEqual(expected);
        });
        it("should handle set notification", () => {
            const action = setNotification(
                { id: 123, message: "new message" },
                "feature"
            );
            const oldState = {};
            const expected = { id: expect.any(Number), message: "new message" };
            const callReducer = reducer.notifications(oldState, action);
            expect(callReducer).toEqual(expected);
        });
        it("should handle remove notification", () => {
            const action = removeNotification(123, "feature");
            const oldState = { id: 123, message: "new message" };
            const expected = {};
            const callReducer = reducer.notifications(oldState, action);
            expect(callReducer).toEqual(expected);
        });
    });
    describe("noOfRandomBeers", () => {
        it("returns the initial state", () => {
            const action = {
                type: "init"
            };
            const expected = "5";
            const callReducer = reducer.noOfRandomBeers(undefined, action);
            expect(callReducer).toEqual(expected);
        });
        it("should handle update no of beers", () => {
            const action = updateNoOfRandomBeers("10", "feature");
            const oldState = "5";
            const expected = "10";
            const callReducer = reducer.noOfRandomBeers(oldState, action);
            expect(callReducer).toEqual(expected);
        });
    });
    describe("searchValidationError", () => {
        it("returns the initial state", () => {
            const action = {
                type: "init"
            };
            const expected = "";
            const callReducer = reducer.searchValidationError(
                undefined,
                action
            );
            expect(callReducer).toEqual(expected);
        });
        it("should handle set search validation", () => {
            const action = setSearchValidationError("Validation Error");
            const oldState = "";
            const expected = "Validation Error";
            const callReducer = reducer.searchValidationError(oldState, action);
            expect(callReducer).toEqual(expected);
        });
    });
});
