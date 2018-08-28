import {
    SAVE_TO_LOCAL_STORAGE,
    saveToLocalStorageError,
    saveToLocalStorageSuccess,
    LOAD_FROM_LOCAL_STORAGE,
    loadFromLocalStorageSuccess,
    loadFromLocalStorageError
} from '../actions/data-actions'

export const localStorageMiddleware = ({ getState }) => next => action => {
    next(action)
    if (action.type.includes(LOAD_FROM_LOCAL_STORAGE)) {
        const { key, feature } = action.meta
        try {
            if (key) {
                const data = JSON.parse(localStorage.getItem(key))
                if (data) {
                    next(loadFromLocalStorageSuccess(data, key, feature))
                } else {
                    throw new Error('No key in local storage')
                }
            } else {
                throw new Error('No key')
            }
        }
        catch (error) {
            next(loadFromLocalStorageError(error, key, feature))
        }
    }
    if (action.type.includes(SAVE_TO_LOCAL_STORAGE)) {
        const { key, feature } = action.meta
        try {
            if (key) {
                localStorage.setItem(key, JSON.stringify(getState().beers[key]))
                next(saveToLocalStorageSuccess(key, feature))
            } else {
                throw new Error('No key')
            }
        }
        catch (error) {
            next(saveToLocalStorageError(error, key, feature))
        }

    }
}