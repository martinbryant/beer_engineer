import { normalizeMiddleware } from '../normalize-middleware'
import { dataNormalized } from '../../actions/data-actions'

describe('normalize middleware', () => {
    let next, dispatch, middleware
    beforeEach(() => {
        next = jest.fn()
        dispatch = jest.fn()
        middleware = normalizeMiddleware({ dispatch })(next)
    })
    it('skips actions without SET', () => {
        const action = {
            type: 'OTHER_ACTION',
            payload: mockapiResponse,
            meta: {
                normalizeKey: 'id'
            }
        }
        middleware(action)
        expect(dispatch).not.toHaveBeenCalled()
        expect(next).toBeCalledWith(action)
    })
    it('skips action without a normalizeKey', () => {
        const action = {
            type: '_SET',
            payload: mockapiResponse,
            meta: {
                feature: 'any'
            }
        }
        middleware(action)
        expect(dispatch).not.toHaveBeenCalled()
        expect(next).toBeCalledWith(action)
    })
    it('handles only SET actions with a normalize key', () => {
        const action = {
            type: '_SET',
            payload: mockapiResponse,
            meta: {
                normalizeKey: 'id'
            }
        }
        middleware(action)
        expect(next).not.toHaveBeenCalledWith(action)
    })

    it('dispatches a dataNormalized action', () => {
        const action = {
            type: 'FEATURE_SET',
            payload: mockapiResponse,
            meta: {
                normalizeKey: 'id',
                feature: 'FEATURE'
            }
        }
        const expected = dataNormalized('FEATURE')
        middleware(action)
        expect(dispatch).toHaveBeenCalledWith(expected)
    })
    it('normalizes the payload', () => {
        const action = {
            type: '_SET',
            payload: mockapiResponse,
            meta: {
                normalizeKey: 'id',
                feature: 'FEATURE'
            }
        }
        const expected = {
            type: '_SET',
            payload: mockNormalizedResponse,
            meta: {
                normalizeKey: null,
                feature: 'FEATURE'
            }
        }
        middleware(action)
        expect(next).toHaveBeenCalledWith(expected)
    })
})

const mockNormalizedResponse = {
    "192": {
        "id": 192,
        "name": "Punk IPA 2007 - 2010",
        "tagline": "Post Modern Classic. Spiky. Tropical. Hoppy.",
        "first_brewed": "04/2007",
        "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
        "image_url": "https://images.punkapi.com/v2/192.png",
        "abv": 6.0,
        "ibu": 60.0,
        "target_fg": 1010.0,
        "target_og": 1056.0,
        "ebc": 17.0,
        "srm": 8.5,
        "ph": 4.4,
        "attenuation_level": 82.14,
        "volume": {
            "value": 20,
            "unit": "liters"
        },
        "boil_volume": {
            "value": 25,
            "unit": "liters"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19.0,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5.3,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 15,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Spicy carne asada with a pico de gallo sauce",
            "Shredded chicken tacos with a mango chilli lime salsa",
            "Cheesecake with a passion fruit swirl sauce"
        ],
        "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    "1": {
        "id": 1,
        "name": "Punk IPA 2007 - 2010",
        "tagline": "Post Modern Classic. Spiky. Tropical. Hoppy.",
        "first_brewed": "04/2007",
        "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
        "image_url": "https://images.punkapi.com/v2/192.png",
        "abv": 6.0,
        "ibu": 60.0,
        "target_fg": 1010.0,
        "target_og": 1056.0,
        "ebc": 17.0,
        "srm": 8.5,
        "ph": 4.4,
        "attenuation_level": 82.14,
        "volume": {
            "value": 20,
            "unit": "liters"
        },
        "boil_volume": {
            "value": 25,
            "unit": "liters"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19.0,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5.3,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 15,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Spicy carne asada with a pico de gallo sauce",
            "Shredded chicken tacos with a mango chilli lime salsa",
            "Cheesecake with a passion fruit swirl sauce"
        ],
        "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
        "contributed_by": "Sam Mason <samjbmason>"
    }
}

const mockapiResponse =
    [
        {
            "id": 192,
            "name": "Punk IPA 2007 - 2010",
            "tagline": "Post Modern Classic. Spiky. Tropical. Hoppy.",
            "first_brewed": "04/2007",
            "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
            "image_url": "https://images.punkapi.com/v2/192.png",
            "abv": 6.0,
            "ibu": 60.0,
            "target_fg": 1010.0,
            "target_og": 1056.0,
            "ebc": 17.0,
            "srm": 8.5,
            "ph": 4.4,
            "attenuation_level": 82.14,
            "volume": {
                "value": 20,
                "unit": "liters"
            },
            "boil_volume": {
                "value": 25,
                "unit": "liters"
            },
            "method": {
                "mash_temp": [
                    {
                        "temp": {
                            "value": 65,
                            "unit": "celsius"
                        },
                        "duration": 75
                    }
                ],
                "fermentation": {
                    "temp": {
                        "value": 19.0,
                        "unit": "celsius"
                    }
                },
                "twist": null
            },
            "ingredients": {
                "malt": [
                    {
                        "name": "Extra Pale",
                        "amount": {
                            "value": 5.3,
                            "unit": "kilograms"
                        }
                    }
                ],
                "hops": [
                    {
                        "name": "Ahtanum",
                        "amount": {
                            "value": 17.5,
                            "unit": "grams"
                        },
                        "add": "start",
                        "attribute": "bitter"
                    },
                    {
                        "name": "Chinook",
                        "amount": {
                            "value": 15,
                            "unit": "grams"
                        },
                        "add": "start",
                        "attribute": "bitter"
                    }
                ],
                "yeast": "Wyeast 1056 - American Ale™"
            },
            "food_pairing": [
                "Spicy carne asada with a pico de gallo sauce",
                "Shredded chicken tacos with a mango chilli lime salsa",
                "Cheesecake with a passion fruit swirl sauce"
            ],
            "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
            "contributed_by": "Sam Mason <samjbmason>"
        },
        {
            "id": 1,
            "name": "Punk IPA 2007 - 2010",
            "tagline": "Post Modern Classic. Spiky. Tropical. Hoppy.",
            "first_brewed": "04/2007",
            "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
            "image_url": "https://images.punkapi.com/v2/192.png",
            "abv": 6.0,
            "ibu": 60.0,
            "target_fg": 1010.0,
            "target_og": 1056.0,
            "ebc": 17.0,
            "srm": 8.5,
            "ph": 4.4,
            "attenuation_level": 82.14,
            "volume": {
                "value": 20,
                "unit": "liters"
            },
            "boil_volume": {
                "value": 25,
                "unit": "liters"
            },
            "method": {
                "mash_temp": [
                    {
                        "temp": {
                            "value": 65,
                            "unit": "celsius"
                        },
                        "duration": 75
                    }
                ],
                "fermentation": {
                    "temp": {
                        "value": 19.0,
                        "unit": "celsius"
                    }
                },
                "twist": null
            },
            "ingredients": {
                "malt": [
                    {
                        "name": "Extra Pale",
                        "amount": {
                            "value": 5.3,
                            "unit": "kilograms"
                        }
                    }
                ],
                "hops": [
                    {
                        "name": "Ahtanum",
                        "amount": {
                            "value": 17.5,
                            "unit": "grams"
                        },
                        "add": "start",
                        "attribute": "bitter"
                    },
                    {
                        "name": "Chinook",
                        "amount": {
                            "value": 15,
                            "unit": "grams"
                        },
                        "add": "start",
                        "attribute": "bitter"
                    },
                ],
                "yeast": "Wyeast 1056 - American Ale™"
            },
            "food_pairing": [
                "Spicy carne asada with a pico de gallo sauce",
                "Shredded chicken tacos with a mango chilli lime salsa",
                "Cheesecake with a passion fruit swirl sauce"
            ],
            "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
            "contributed_by": "Sam Mason <samjbmason>"
        }
    ]
