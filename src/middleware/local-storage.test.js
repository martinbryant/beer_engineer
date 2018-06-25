import { localStorageMid, saveToLocalStorage } from './local-storage';
import { SET_BEER_AS_FAVOURITE } from '../actions/constants'

describe('localStorage middleware tests', () => {
    let next, dispatch, getState, middleware;
    beforeEach(() => {
        next = jest.fn();
        dispatch = jest.fn();
        getState = jest.fn().mockReturnValue({
            favouriteBeers: [192, 168]
        })
        const localStorageMock = {
            getItem: jest.fn(),
            setItem: jest.fn(),
            clear: jest.fn()
        };
        global.localStorage = localStorageMock
        middleware = localStorageMid({ dispatch, getState })(next);
    })
    afterEach(() => {
        global.localStorage = undefined
    })
    it('should call next for every action', () => {
        const action = {
            type: 'ANY_ACTION'
        }
        middleware(action)
        expect(next).toHaveBeenCalled()
    })
    it('should handle setBeerAsFavourite action', () => {
        const action = {
            type: SET_BEER_AS_FAVOURITE,
            id: 192
        }
        middleware(action)
        expect(getState).toHaveBeenCalledTimes(1)
        expect(localStorage.setItem).toHaveBeenCalledWith('favouriteBeers', '[192,168]')
    })
    it('should ignore any other actions', () => {
        const action = {
            type: 'NON-LOCAL_STORAGE'
        }
        middleware(action)
        expect(next).not.toHaveBeenCalledTimes(2)
    })
})