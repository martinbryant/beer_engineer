import * as actions from './actions';

describe('Action creator tests', () => {
    it('getBeerListByNameStarted', () => {
        const expected = {
            type: 'GET_BEER_LIST_BY_NAME_STARTED'
        }
        expect(actions.getBeerListByNameStarted()).toEqual(expected)
    })
    it('getBeerListByNameSuccess', () => {
        const beerList = []
        const expected = {
            type: 'GET_BEER_LIST_BY_NAME_SUCCESS',
            beerList
        }
        expect(actions.getBeerListByNameSuccess(beerList)).toEqual(expected)
    })
    it('getBeerListByNameFailure', () => {
        const error = 'Error'
        const expected = {
            type: 'GET_BEER_LIST_BY_NAME_FAILURE',
            error
        }
        expect(actions.getBeerListByNameFailure(error)).toEqual(expected)
    })
    it('favouriteBeer', () => {
        const id = '192'
        const expected = {
            type: 'FAVOURITE_BEER',
            id
        }
        expect(actions.favouriteBeer(id)).toEqual(expected)
    })
})