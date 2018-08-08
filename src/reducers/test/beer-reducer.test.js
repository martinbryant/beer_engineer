import * as reducer from '../beer-reducer'
import { setBeers, addFavourite, deleteFavourite } from '../../actions/beer-actions'

describe('beer reducer', () => {
    describe('searchedBeers', () => {
        it('return initial state', () => {
            const expected = {}
            const action = {
                type: 'init'
            }
            const callReducer = reducer.searchedBeers(undefined, action)
            expect(callReducer).toEqual(expected)
        })
        it('return the same state for ignored action', () => {
            const expected = mockNormalizedResponse
            const action = {
                type: 'init'
            }
            const oldState = mockNormalizedResponse
            const callReducer = reducer.searchedBeers(oldState, action)
            expect(callReducer).toEqual(expected)
        })
        it('should handle setBeers', () => {
            const action = setBeers(mockNormalizedResponse, 'FEATURE')
            const oldState = {}
            const expected = mockNormalizedResponse
            const callReducer = reducer.searchedBeers(oldState, action)
            expect(callReducer).toEqual(expected)
        })
    })
    describe('favouriteBeers', () => {
        it('return initial state', () => {
            const expected = {}
            const action = {
                type: 'init'
            }
            const callReducer = reducer.favouriteBeers(undefined, action)
            expect(callReducer).toEqual(expected)
        })
        it('return the same state for an ignored action', () => {
            const expected = mockNormalizedResponse
            const action = {
                type: 'init'
            }
            const oldState = mockNormalizedResponse
            const callReducer = reducer.favouriteBeers(oldState, action)
            expect(callReducer).toEqual(expected)
        })
        it('should handle addFavourite', () => {
            const expected = mockAdd
            const newBeer = {
                5: {
                    id: 5,
                    name: 'Punk IPA 2007 - 2010',
                    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
                    image_url: 'https://images.punkapi.com/v2/192.png'
                }
            }
            const action = addFavourite(newBeer)
            const oldState = mockNormalizedResponse
            const callReducer = reducer.favouriteBeers(oldState, action)
            expect(callReducer).toEqual(expected)
        })
        it('should handle deleteFavourite', () => {
            const expected = mockDelete
            const id = '1';
            const action = deleteFavourite(id)
            const oldState = mockNormalizedResponse
            const callReducer = reducer.favouriteBeers(oldState, action)
            expect(callReducer).toEqual(expected)
        })
    })
})

const mockNormalizedResponse = {
    '192': {
        id: 192,
        name: 'Punk IPA 2007 - 2010',
        tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
        image_url: 'https://images.punkapi.com/v2/192.png'
    },
    '1': {
        id: 1,
        name: 'Punk IPA 2007 - 2010',
        tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
        image_url: 'https://images.punkapi.com/v2/192.png'
    }
}


const mockAdd = {
    '192': {
        id: 192,
        name: 'Punk IPA 2007 - 2010',
        tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
        image_url: 'https://images.punkapi.com/v2/192.png'
    },
    '1': {
        id: 1,
        name: 'Punk IPA 2007 - 2010',
        tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
        image_url: 'https://images.punkapi.com/v2/192.png'
    },
    '5': {
        id: 5,
        name: 'Punk IPA 2007 - 2010',
        tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
        image_url: 'https://images.punkapi.com/v2/192.png'
    }
}

const mockDelete = {
    '192': {
        id: 192,
        name: 'Punk IPA 2007 - 2010',
        tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
        image_url: 'https://images.punkapi.com/v2/192.png'
    }
}
