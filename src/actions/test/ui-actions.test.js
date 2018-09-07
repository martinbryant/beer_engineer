import * as actions from '../ui-actions'

describe('ui actions', () => {
    it('setLoader', () => {
        const expected = {
            type: 'FEATURE_SET_LOADER',
            payload: true,
            meta: {
                feature: 'FEATURE'
            }
        }
        const isLoading = true;
        const feature = 'FEATURE'
        const action = actions.setLoader(isLoading, feature)
        expect(action).toEqual(expected)
    })
    it('setNotification', () => {
        const expected = {
            type: 'FEATURE_SET_NOTIFICATION',
            payload: 'Error loading beers',
            meta: {
                feature: 'FEATURE'
            }
        }
        const message = 'Error loading beers'
        const feature = 'FEATURE'
        const action = actions.setNotification(message, feature)
        expect(action).toEqual(expected)
    })
    it('removeNotification', () => {
        const expected = {
            type: 'FEATURE_REMOVE_NOTIFICATION',
            payload: 123,
            meta: {
                feature: 'FEATURE'
            }
        }
        const id = 123
        const feature = 'FEATURE'
        const action = actions.removeNotification(id, feature)
        expect(action).toEqual(expected)
    })
    it('updateNoOfRandomBeers', () => {
        const expected = {
            type: 'UPDATE_NO_OF_RANDOM_BEERS',
            payload: 1
        }
        const noOfBeers = 1
        const action = actions.updateNoOfRandomBeers(noOfBeers)
        expect(action).toEqual(expected)
    })
})