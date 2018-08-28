import 'jest-localstorage-mock';

import { localStorageMiddleware } from '../local-storage-middleware'
import { saveToLocalStorage, saveToLocalStorageError, saveToLocalStorageSuccess, loadFromLocalStorage, loadFromLocalStorageSuccess, loadFromLocalStorageError } from '../../actions/data-actions';

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
        const data = {
            '101': {
                item: 'an item'
            }
        }
        const action = saveToLocalStorage('favourite', 'FAVOURITE')
        const expected = saveToLocalStorageSuccess('favourite', 'FAVOURITE')
        middleware(action)
        expect(localStorage.setItem).toHaveBeenLastCalledWith('favourite', JSON.stringify(data))
        expect(next).toHaveBeenCalledWith(expected)
    })
    it('handles save to local storage actions and call next with failure action', () => {
        const action = saveToLocalStorage(undefined, 'FEATURE')
        const expected = saveToLocalStorageError(Error('No key'), undefined, 'FEATURE')
        middleware(action)
        expect(next).toHaveBeenCalledWith(expected)
    })
    it('handles load from local storage actions and call next with success action', () => {
        const data = {
            '101': {
                item: 'an item'
            }
        }
        const action = loadFromLocalStorage('favourite', 'FAVOURITE')
        const expected = loadFromLocalStorageSuccess(data, 'favourite', 'FAVOURITE')
        localStorage.setItem('favourite', JSON.stringify(data))
        middleware(action)
        expect(localStorage.getItem).toHaveBeenLastCalledWith('favourite')
        expect(next).toHaveBeenCalledWith(expected)

    })
    it('handles load from local storage actions and call next with failure action', () => {
        const action = loadFromLocalStorage('favourite', 'FAVOURITE')
        const expected = loadFromLocalStorageError(Error('No key in local storage'), 'favourite', 'FAVOURITE')
        localStorage.setItem('f', 'value')
        middleware(action)
        expect(localStorage.getItem).toHaveBeenLastCalledWith('favourite')
        expect(next).toHaveBeenCalledWith(expected)
    })
})