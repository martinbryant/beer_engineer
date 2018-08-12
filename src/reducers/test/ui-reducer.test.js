import * as reducer from '../ui-reducer'
import { setLoader } from '../../actions/ui-actions';

describe('ui reducer', () => {
    describe('isLoading status', () => {
        it('returns the initial state', () => {
            const action = {
                type: 'init'
            }
            const expected = false
            const callReducer = reducer.isLoading(undefined, action)
            expect(callReducer).toEqual(expected)
        })
        it('returns the same state for ignored actions', () => {
            const action = {
                type: 'init'
            }
            const oldState = true
            const expected = true
            const callReducer = reducer.isLoading(oldState, action)
            expect(callReducer).toEqual(expected)
        })
        it('should handle set loader', () => {
            const action = setLoader(true, 'FEATURE')
            const oldState = false
            const expected = true
            const callReducer = reducer.isLoading(oldState, action)
            expect(callReducer).toEqual(expected)
        })
    })
})