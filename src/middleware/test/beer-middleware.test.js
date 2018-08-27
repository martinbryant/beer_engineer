import { beerMiddleware } from '../beer-middleware'
import { BEERS_BY_NAME, BEER_RANDOM, setBeers, fetchBeerByName, fetchBeerRandom, toggleFavourite, addFavourite, deleteFavourite } from '../../actions/beer-actions';
import { apiSuccess, apiError } from '../../actions/api-actions';
import { setLoader, setNotification } from '../../actions/ui-actions';
import { saveToLocalStorage } from '../../actions/data-actions';

describe('beerMiddleware', () => {
    let next, getState, middleware
    beforeEach(() => {
        next = jest.fn()
        getState = () => ({
            beers: {
                searchedBeers: mockSearchedBeers,
                favouriteBeers: mockFavouriteBeers
            }
        })
        middleware = beerMiddleware({ getState })(next)
    })
    it('calls next with the passed in action', () => {
        const action = {
            type: 'AN_ACTION'
        }
        middleware(action)
        expect(next).toHaveBeenCalledWith(action)
    })
    it('skips non-beer related action', () => {
        const action = {
            type: 'IGNORED_ACTION'
        }
        middleware(action)
        expect(next).not.toHaveBeenCalledTimes(2)
    })
    it('fetch beers by name action calls api request', () => {
        const action = fetchBeerByName('beer')
        const apiRequestAction = {
            type: 'BEERS_BY_NAME_API_REQUEST',
            payload: {},
            meta: {
                method: 'GET',
                url: `${'https://api.punkapi.com/v2/beers?beer_name='}${'beer'}`,
                feature: BEERS_BY_NAME
            }
        }
        middleware(action)
        expect(next).toHaveBeenCalledWith(apiRequestAction)

    })
    it('fetch beers by name action url replaces spaces with underscores', () => {
        const action = fetchBeerByName('punk beer')
        const apiRequestAction = {
            type: 'BEERS_BY_NAME_API_REQUEST',
            payload: {},
            meta: {
                method: 'GET',
                url: `${'https://api.punkapi.com/v2/beers?beer_name='}${'punk_beer'}`,
                feature: BEERS_BY_NAME
            }
        }
        middleware(action)
        expect(next).toHaveBeenCalledWith(apiRequestAction)

    })
    it('fetch beers by name action calls set loader', () => {
        const action = fetchBeerByName('beer')
        const setLoaderAction = {
            type: 'BEERS_BY_NAME_SET_LOADER',
            payload: true,
            meta: {
                feature: BEERS_BY_NAME
            }
        }
        middleware(action)
        expect(next).toHaveBeenCalledWith(setLoaderAction)
    })
    it('fetch beers random action calls api request', () => {
        const action = fetchBeerRandom()
        const apiRequestAction = {
            type: 'BEER_RANDOM_API_REQUEST',
            payload: {},
            meta: {
                method: 'GET',
                url: 'https://api.punkapi.com/v2/beers/random',
                feature: BEER_RANDOM
            }
        }
        middleware(action)
        expect(next).toHaveBeenCalledWith(apiRequestAction)
    })
    it('fetch beers random action calls set loader', () => {
        const action = fetchBeerRandom()
        const setLoaderAction = {
            type: 'BEER_RANDOM_SET_LOADER',
            payload: true,
            meta: {
                feature: BEER_RANDOM
            }
        }
        middleware(action)
        expect(next).toHaveBeenCalledWith(setLoaderAction)
    })
    it('api success action calls set beers', () => {
        const action = apiSuccess([], 'FEATURE')
        const setBeersAction = setBeers([], 'FEATURE')
        middleware(action)
        expect(next).toHaveBeenCalledWith(setBeersAction)
    })
    it('api success action calls set loader', () => {
        const action = apiSuccess([], 'FEATURE')
        const setLoaderAction = setLoader(false, 'FEATURE')
        middleware(action)
        expect(next).toHaveBeenCalledWith(setLoaderAction)
    })
    it('api error action calls set notification', () => {
        const action = apiError(Error('loading error'), 'FEATURE')
        const setNotificationAction = setNotification('loading error', 'FEATURE')
        middleware(action)
        expect(next).toHaveBeenCalledWith(setNotificationAction)
    })
    it('api error action calls set loader', () => {
        const action = apiError(Error('loading error'), 'FEATURE')
        const setLoaderAction = setLoader(false, 'FEATURE')
        middleware(action)
        expect(next).toHaveBeenCalledWith(setLoaderAction)
    })
    it('toggle favourite action calls add favourite/set Notification if it does not exist', () => {
        const notIncludedBeer = '1'
        const action = toggleFavourite(notIncludedBeer)
        const addFavouriteAction = addFavourite(mockSearchedBeers)
        const setNotificationAction = setNotification('Favourite saved', 'FAVOURITE')
        middleware(action)
        expect(next).toHaveBeenCalledWith(addFavouriteAction)
        expect(next).toHaveBeenCalledWith(setNotificationAction)
    })
    it('toggle favourite action calls delete favourite/set Notification if it exists', () => {
        const includedBeer = '5'
        const action = toggleFavourite(includedBeer)
        const deleteFavouriteAction = deleteFavourite(includedBeer)
        const setNotificationAction = setNotification('Favourite removed', 'FAVOURITE')
        middleware(action)
        expect(next).toHaveBeenCalledWith(deleteFavouriteAction)
        expect(next).toHaveBeenCalledWith(setNotificationAction)
    })
    it('toggle favourite action calls save to local storage', () => {
        const includedBeer = '5'
        const action = toggleFavourite(includedBeer)
        const expected = saveToLocalStorage('favouriteBeers')
        middleware(action)
        expect(next).toHaveBeenCalledWith(expected)
    })
})

const mockFavouriteBeers = {
    '192': {
        id: 192,
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

const mockSearchedBeers = {
    '1': {
        id: 1,
        name: 'Punk IPA 2007 - 2010',
        tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
        image_url: 'https://images.punkapi.com/v2/192.png'
    }
}