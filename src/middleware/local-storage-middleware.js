import { SAVE_TO_LOCAL_STORAGE, saveToLocalStorageError, saveToLocalStorageSuccess } from '../actions/data-actions'

export const localStorageMiddleware = ({ getState }) => next => action => {
    next(action)
    if (action.type.includes(SAVE_TO_LOCAL_STORAGE)) {
        const { key } = action.meta
        try {
            if (key) {
                localStorage.setItem(key, JSON.stringify(getState().beers[key]))
                next(saveToLocalStorageSuccess(key))
            } else {
                throw new Error('No key')
            }
        }
        catch (error) {
            next(saveToLocalStorageError((error), key))
        }

    }
}