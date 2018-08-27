export const SET_LOADER = '_SET_LOADER'
export const SET_NOTIFICATION = '_SET_NOTIFICATION'
export const REMOVE_NOTIFICATION = '_REMOVE_NOTIFICATION'

export const setLoader = (isLoading, feature) => ({
    type: `${feature}${SET_LOADER}`,
    payload: isLoading,
    meta: {
        feature
    }
})

export const setNotification = (message, feature) => ({
    type: `${feature}${SET_NOTIFICATION}`,
    payload: message,
    meta: {
        feature
    }
})

export const removeNotification = (id, feature) => ({
    type: `${feature}${REMOVE_NOTIFICATION}`,
    payload: id,
    meta: {
        feature
    }
})