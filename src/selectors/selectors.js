export const isBeerFavourite = state => beer => state.favouriteList.find(fav => fav.id === beer.id)

export const getNeededBeerProperties = beerList => beerList.map(({ image_url, name, id, tagline }) => ({
    image_url,
    name,
    id,
    tagline
}))

