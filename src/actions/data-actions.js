const DATA_NORMALIZED = '_DATA_NORMALIZED'
export const SAVE_TO_LOCAL_STORAGE = '_SAVE_TO_LOCAL_STORAGE'
export const SAVE_TO_LOCAL_STORAGE_ERROR = '_SAVE_TO_LOCAL_STORAGE_ERROR'
export const SAVE_TO_LOCAL_STORAGE_SUCCESS = '_SAVE_TO_LOCAL_STORAGE_SUCCESS'
export const LOAD_FROM_LOCAL_STORAGE = '_LOAD_FROM_LOCAL_STORAGE'
export const LOAD_FROM_LOCAL_STORAGE_SUCCESS = '_LOAD_FROM_LOCAL_STORAGE_SUCCESS'
export const LOAD_FROM_LOCAL_STORAGE_ERROR = '_LOAD_FROM_LOCAL_STORAGE_ERROR'


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

export const loadFromLocalStorage = (key, feature) => ({
    type: `${feature}${LOAD_FROM_LOCAL_STORAGE}`,
    meta: {
        key,
        feature
    }
})

export const loadFromLocalStorageSuccess = (payload, key, feature) => ({
    type: `${feature}${LOAD_FROM_LOCAL_STORAGE_SUCCESS}`,
    payload,
    meta: {
        key,
        feature
    }
})

export const loadFromLocalStorageError = (error, key, feature) => ({
    type: `${feature}${LOAD_FROM_LOCAL_STORAGE_ERROR}`,
    payload: error,
    meta: {
        key,
        feature
    }
})