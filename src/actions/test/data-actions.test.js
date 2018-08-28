import * as actions from '../data-actions';

describe('data actions', () => {
    it('dataNormalized', () => {
        const expected = {
            type: 'FEATURE_DATA_NORMALIZED',
            meta: {
                feature: 'FEATURE'
            }
        }
        const feature = 'FEATURE'
        const action = actions.dataNormalized(feature)
        expect(action).toEqual(expected)
    })
    it('saveToLocalStorage', () => {
        const expected = {
            type: 'FEATURE_SAVE_TO_LOCAL_STORAGE',
            meta: {
                key: 'key',
                feature: 'FEATURE'
            }
        }
        const key = 'key'
        const feature = 'FEATURE'
        const action = actions.saveToLocalStorage(key, feature)
        expect(action).toEqual(expected)
    })
    it('saveToLocalStorageError', () => {
        const expected = {
            type: 'FEATURE_SAVE_TO_LOCAL_STORAGE_ERROR',
            payload: Error('Failed to save'),
            meta: {
                key: 'key',
                feature: 'FEATURE'
            }
        }
        const key = 'key'
        const feature = 'FEATURE'
        const payload = Error('Failed to save')
        const action = actions.saveToLocalStorageError(payload, key, feature)
        expect(action).toEqual(expected)
    })
    it('saveToLocalStorageSuccess', () => {
        const expected = {
            type: 'FEATURE_SAVE_TO_LOCAL_STORAGE_SUCCESS',
            meta: {
                key: 'key',
                feature: 'FEATURE'
            }
        }
        const key = 'key'
        const feature = 'FEATURE'
        const action = actions.saveToLocalStorageSuccess(key, feature)
        expect(action).toEqual(expected)
    })
    it('loadFromLocalStorage', () => {
        const expected = {
            type: 'FEATURE_LOAD_FROM_LOCAL_STORAGE',
            meta: {
                key: 'key',
                feature: 'FEATURE'
            }
        }
        const key = 'key'
        const feature = 'FEATURE'
        const action = actions.loadFromLocalStorage(key, feature)
        expect(action).toEqual(expected)
    })
    it('loadFromLocalStorageSuccess', () => {
        const expected = {
            type: 'FEATURE_LOAD_FROM_LOCAL_STORAGE_SUCCESS',
            payload: {
                '192': {
                    name: 'dummy'
                }
            },
            meta: {
                key: 'key',
                feature: 'FEATURE'
            }
        }
        const payload = {
            '192': {
                name: 'dummy'
            }
        }
        const key = 'key'
        const feature = 'FEATURE'
        const action = actions.loadFromLocalStorageSuccess(payload, key, feature)
        expect(action).toEqual(expected)
    })
    it('loadFromLocalStorageError', () => {
        const expected = {
            type: 'FEATURE_LOAD_FROM_LOCAL_STORAGE_ERROR',
            payload: Error('Failed to load'),
            meta: {
                key: 'key',
                feature: 'FEATURE'
            }
        }
        const key = 'key'
        const feature = 'FEATURE'
        const error = Error('Failed to load')
        const action = actions.loadFromLocalStorageError(error, key, feature)
        expect(action).toEqual(expected)
    })
})