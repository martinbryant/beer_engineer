const DATA_NORMALIZED = '_DATA_NORMALIZED'
export const SAVE_TO_LOCAL_STORAGE = '_SAVE_TO_LOCAL_STORAGE'
export const SAVE_TO_LOCAL_STORAGE_ERROR = '_SAVE_TO_LOCAL_STORAGE_ERROR'
export const SAVE_TO_LOCAL_STORAGE_SUCCESS = '_SAVE_TO_LOCAL_STORAGE_SUCCESS'


export const dataNormalized = feature => ({
    type: `${feature}${DATA_NORMALIZED}`,
    meta: {
        feature
    }
})

export const saveToLocalStorage = (key, feature) => ({
    type: `${feature}${SAVE_TO_LOCAL_STORAGE}`,
    meta: {
        key,
        feature
    }
})

export const saveToLocalStorageError = (error, key, feature) => ({
    type: `${feature}${SAVE_TO_LOCAL_STORAGE_ERROR}`,
    payload: error,
    meta: {
        key,
        feature
    }
})

export const saveToLocalStorageSuccess = (key, feature) => ({
    type: `${feature}${SAVE_TO_LOCAL_STORAGE_SUCCESS}`,
    meta: {
        key,
        feature
    }
})