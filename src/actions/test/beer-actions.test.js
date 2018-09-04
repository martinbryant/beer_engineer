import * as actions from '../beer-actions'

describe('Beer actions', () => {
    it('fetchBeersByName', () => {
        const expected = {
            type: 'FETCH_BEERS_BY_NAME',
            payload: 'punk',
            meta: {
                feature: 'BEERS_BY_NAME'
            }
        }
        const query = 'punk'
        const action = actions.fetchBeerByName(query)
        expect(action).toEqual(expected)
    })
    it('fetchBeerRandom', () => {
        const expected = {
            type: 'FETCH_BEER_RANDOM',
            payload: 5,
            meta: {
                feature: 'BEER_RANDOM'
            }
        }
        const action = actions.fetchBeerRandom(5)
        expect(action).toEqual(expected)
    })
    it('setBeers', () => {
        const expected = {
            type: 'FEATURE_SET_BEERS',
            payload: [],
            meta: {
                feature: 'FEATURE',
                normalizeKey: 'id'
            }
        }
        const beers = []
        const feature = 'FEATURE'
        const action = actions.setBeers(beers, feature)
        expect(action).toEqual(expected)
    })
    it('toggleFavourite', () => {
        const expected = {
            type: 'TOGGLE_FAVOURITE',
            payload: '123'
        }
        const id = 123
        const action = actions.toggleFavourite(id)
        expect(action).toEqual(expected)
    })
    it('addFavourite', () => {
        const expected = {
            type: 'ADD_FAVOURITE',
            payload: {
                123: {
                    id: 123
                }
            }
        }
        const beer = {
            123: {
                id: 123
            }
        }
        const action = actions.addFavourite(beer)
        expect(action).toEqual(expected)
    })
    it('deleteFavourite', () => {
        const expected = {
            type: 'DELETE_FAVOURITE',
            payload: 123
        }
        const id = 123
        const action = actions.deleteFavourite(id)
        expect(action).toEqual(expected)
    })
})

