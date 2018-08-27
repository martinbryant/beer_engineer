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


export const getSearchedBeers = state => {
    const { beers: { searchedBeers } } = state
    return Object.keys(searchedBeers)
        .reduce((beers = [], beerId) => {
            const { id, name, tagline, image_url } = searchedBeers[beerId]
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

export const getFavouriteBeers = state => {
    const { beers: { favouriteBeers } } = state
    return Object.keys(favouriteBeers)
        .reduce((beers = [], beerId) => {
            const { id, name, tagline, image_url } = favouriteBeers[beerId]
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

export const hasNotification = state => {
    const { notifications } = state.ui
    return (Object.keys(notifications).length !== 0 && notifications.constructor === Object)
}

