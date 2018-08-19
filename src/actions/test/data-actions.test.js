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
            type: 'SAVE_TO_LOCAL_STORAGE',
            meta: {
                key: 'key'
            }
        }
        const key = 'key'
        const action = actions.saveToLocalStorage(key)
        expect(action).toEqual(expected)
    })
    it('saveToLocalStorageError', () => {
        const expected = {
            type: 'key_SAVE_TO_LOCAL_STORAGE_ERROR',
            payload: Error('Failed to save'),
            meta: {
                key: 'key'
            }
        }
        const key = 'key'
        const payload = Error('Failed to save')
        const action = actions.saveToLocalStorageError(payload, key)
        expect(action).toEqual(expected)
    })
    it('saveToLocalStorageSuccess', () => {
        const expected = {
            type: 'key_SAVE_TO_LOCAL_STORAGE_SUCCESS',
            meta: {
                key: 'key'
            }
        }
        const key = 'key'
        const action = actions.saveToLocalStorageSuccess(key)
        expect(action).toEqual(expected)
    })
})