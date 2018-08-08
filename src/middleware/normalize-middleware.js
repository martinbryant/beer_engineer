import { dataNormalized } from '../actions/data-actions'

export const normalizeMiddleware = ({ dispatch }) => next => action => {
    const { normalizeKey, feature } = action.meta;
    if (action.type.includes('_SET') && normalizeKey) {
        dispatch(dataNormalized(feature))
        const newPayload = action.payload.reduce((acc, item) => {
            acc[item[normalizeKey]] = item;
            return acc;
        }, {})
        next({
            ...action,
            payload: newPayload,
            meta: {
                ...action.meta,
                normalizeKey: null
            }
        })

    }
    else {
        next(action)
    }
}