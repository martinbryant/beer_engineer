import 'jest-localstorage-mock';

import { localStorageMiddleware } from '../local-storage-middleware'
import { saveToLocalStorage, saveToLocalStorageError, saveToLocalStorageSuccess } from '../../actions/data-actions';

describe('local storage middleware', () => {
    let next, middleware, getState
    beforeEach(() => {
        localStorage.clear()
        next = jest.fn()
        middleware = localStorageMiddleware({ getState })(next)
        getState = () => ({
            beers: {
                favourite: {
                    '101': {
                        item: 'an item'
                    }
                }
            }
        })

    })
    it('calls next with every action', () => {
        const action = {
            type: 'AN_ACTION'
        }
        middleware(action)
        expect(next).toHaveBeenCalled()
    })
    it('handles save to local storage actions and call next with success action', () => {
        const action = saveToLocalStorage('favourite')
        const expected = saveToLocalStorageSuccess('favourite')
        middleware(action)
        expect(next).toHaveBeenCalledWith(expected)
    })
    it('handles save to local storage actions and call next with failure action', () => {
        const action = saveToLocalStorage()
        const expected = saveToLocalStorageError(Error('No key'), undefined)
        middleware(action)
        expect(next).toHaveBeenCalledWith(expected)
    })
})