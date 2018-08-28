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
})