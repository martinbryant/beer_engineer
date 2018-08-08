const DATA_NORMALIZED = '_DATA_NORMALIZED'

export const dataNormalized = feature => ({
    type: `${feature}${DATA_NORMALIZED}`,
    meta: {
        feature
    }
})