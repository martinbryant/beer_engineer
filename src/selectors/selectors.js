export const isBeerFavourite = state => beer => getFavouriteBeers(state).find(fav => fav.id === beer.id)

export const getNeededBeerProperties = beerList => beerList.map(({ image_url, name, id, tagline }) => ({
    image_url,
    name,
    id,
    tagline
}))

export const getNoOfFavourites = state => Object.keys(state.beers.favouriteBeers).length

// write selector tests
// refactor to getFavorSearchedBeers

const getBeers = field => state => {
    const requiredBeers = state.beers[field]
    return Object.keys(requiredBeers)
        .reduce((beers = [], beerId) => {
            const { id, name, tagline, image_url } = requiredBeers[beerId]
            return [...beers,
            {
                id,
                name,
                tagline,
                image_url
            }
            ]
        }, []) || []
}

export const getFavouriteBeers = getBeers('favouriteBeers')

export const getSearchedBeers = getBeers('searchedBeers')

export const hasNotification = state => {
    const { notifications } = state.ui
    return (Object.keys(notifications).length !== 0 && notifications.constructor === Object)
}

