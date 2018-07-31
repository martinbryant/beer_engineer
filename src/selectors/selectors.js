export const isBeerFavourite = state => beerId => state.favouriteList.includes(beerId)

export const getNeededBeerProperties = beerList => beerList.map(({ image_url, name, id, tagline }) => ({
    image_url,
    name,
    id,
    tagline
}))