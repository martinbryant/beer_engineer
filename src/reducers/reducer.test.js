import reducer from './reducer'
import * as actions from '../actions/actions'

describe('Reducer tests', () => {
    const initialState = {
        favouriteList: [],
        beerList: [],
        loadingStatus: 'initial',
        loadingError: ''
    }
    const beer = {
        id: 192,
        name: 'Punk IPA 2007 - 2010',
        description: 'Our flagship beer that kick started the craft beer revolution. This is James and Martin\'s original take on an American IPA, subverted with punchy New Zealand hops.Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.',
        image: 'https://images.punkapi.com/v2/192.png',
        isFavourite: false
    }
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })
    it('should handle getBeerListByNameStarted', () => {
        const state = initialState;
        const action = actions.getBeerListByNameStarted()
        const expected = {
            ...state,
            loadingStatus: 'loading'
        }
        expect(reducer(state, action)).toEqual(expected)
    })
    it('should handle getBeerListByNameSuccess', () => {
        const state = initialState;
        const action = actions.getBeerListByNameSuccess([beer])
        const expected = {
            ...state,
            beerList: [beer],
            loadingStatus: 'success'
        }
        expect(reducer(state, action)).toEqual(expected)
    })
    it('should handle getBeerListByNameFailure', () => {
        const state = initialState;
        const action = actions.getBeerListByNameFailure('Not Found')
        const expected = {
            ...state,
            loadingError: 'Not Found',
            loadingStatus: 'error'
        }
        expect(reducer(state, action)).toEqual(expected)
    })
    it('should handle favouriteBeer and make the beer a favourite', () => {
        const state = {
            ...initialState,
            beerList: [beer]
        }
        const action = actions.setBeerAsFavourite(192)
        const expected = {
            ...state,
            beerList: [{
                ...beer,
                isFavourite: true
            }],
            favouriteList: [192]
        }
        expect(reducer(state, action)).toEqual(expected)
    })
    it('should handle favouriteBeer and remove the beer as a favourite', () => {
        const state = {
            ...initialState,
            beerList: [{
                ...beer,
                isFavourite: true
            }],
            favouriteList: [192]
        }
        const action = actions.setBeerAsFavourite(192)
        const expected = {
            ...state,
            beerList: [{
                ...beer,
                isFavourite: false
            }],
            favouriteList: []
        }
        expect(reducer(state, action)).toEqual(expected)
    })
})