import * as actions from '../data-actions';

describe('data actions', () => {
    it('dataNormalized', () => {
        const expected = {
            type: 'FEATURE_DATA_NORMALIZED',
            meta: {
                feature: 'FEATURE'
            }
        }
        const feature = "FEATURE"
        const action = actions.dataNormalized(feature)
        expect(action).toEqual(expected)
    })
})