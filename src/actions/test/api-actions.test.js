import * as actions from '../api-actions'

describe('api actions', () => {
    it('apiRequest', () => {
        const expected = {
            type: 'BEERS_BY_NAME_API_REQUEST',
            payload: {},
            meta: {
                method: 'GET',
                url: 'http://beersbyname.com',
                feature: 'BEERS_BY_NAME'
            }
        }
        const body = {}
        const method = 'GET'
        const url = 'http://beersbyname.com'
        const feature = 'BEERS_BY_NAME'
        const action = actions.apiRequest(body, method, url, feature)
        expect(action).toEqual(expected)
    })
    it('apiSuccess', () => {
        const expected = {
            type: 'BEERS_BY_NAME_API_SUCCESS',
            payload: [],
            meta: {
                feature: 'BEERS_BY_NAME'
            }
        }
        const response = []
        const feature = 'BEERS_BY_NAME'
        const action = actions.apiSuccess(response, feature)
        expect(action).toEqual(expected)
    })
    it('apiError', () => {
        const expected = {
            type: 'BEERS_BY_NAME_API_ERROR',
            payload: Error('api error'),
            meta: {
                feature: 'BEERS_BY_NAME'
            }
        }
        const error = Error('api error')
        const feature = 'BEERS_BY_NAME'
        const action = actions.apiError(error, feature)
        expect(action).toEqual(expected)
    })
})

//fetchBeersByName
//fetchBeerRandom
//setLoader
//toggleFavourite
//setNotification
//setBeers