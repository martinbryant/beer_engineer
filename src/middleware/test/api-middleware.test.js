import fetchMock from "fetch-mock";
import { apiMiddleware } from "../api-middleware";
import {
    API_REQUEST,
    apiRequest,
    apiSuccess,
    apiError
} from "../../actions/api-actions";

describe("api middleware", () => {
    let next, dispatch, middleware;
    beforeEach(() => {
        next = jest.fn();
        dispatch = jest.fn();
        middleware = apiMiddleware({ dispatch })(next);
    });
    afterEach(() => {
        fetchMock.restore();
    });
    it("calls next with the passed in action", () => {
        const action = {
            type: "AN_ACTION"
        };
        middleware(action);
        expect(next).toHaveBeenCalledWith(action);
    });
    it("handles api request action with 1 url and returns a success action", () => {
        const action = apiRequest({}, "GET", "http://example.com", "feature");
        const expected = apiSuccess(mockapiResponse, "feature");
        fetchMock.mock(
            "http://example.com",
            { body: mockapiResponse },
            { options: "GET" }
        );
        return middleware(action).then(() => {
            expect(dispatch).toHaveBeenCalledWith(expected);
        });
    });
    // it('handles api request action with multiple urls and returns a success action', () => {
    //     const urls = ['http://example.com', 'http://example2.com']
    //     const action = apiRequest({}, 'GET', urls, 'feature')
    //     const expected = apiSuccess(mockMultipeapiResponse, 'feature')
    //     fetchMock.mock('http://example.com', { body: mockapiResponse }, { options: 'GET' })
    //     fetchMock.mock('http://example2.com', { body: mockapiResponse }, { options: 'GET' })
    //     return middleware(action).then(() => {
    //         expect(dispatch).toHaveBeenCalledWith(expected)
    //     })
    // })
    it("handles api request action and returns a failure action", () => {
        const action = apiRequest({}, "GET", "http://example.com", "feature");
        const expected = apiError(Error("Network Response Error"), "feature");
        fetchMock.mock(
            "http://example.com",
            { status: "404" },
            { options: "GET" }
        );
        return middleware(action).then(() => {
            expect(dispatch).toHaveBeenCalledWith(expected);
        });
    });
    it("skips actions without api request", () => {
        const action = {
            type: "AN_ACTION"
        };
        middleware(action);
        expect(dispatch).not.toHaveBeenCalled();
    });
});

const mockapiResponse = [
    {
        id: 192,
        name: "Punk IPA 2007 - 2010",
        tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
        first_brewed: "04/2007",
        image_url: "https://images.punkapi.com/v2/192.png"
    },
    {
        id: 1,
        name: "Punk IPA 2007 - 2010",
        tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
        first_brewed: "04/2007",
        image_url: "https://images.punkapi.com/v2/192.png"
    }
];

const mockMultipeapiResponse = [
    mockapiResponse[0],
    mockapiResponse[1],
    mockapiResponse[0],
    mockapiResponse[1]
];
