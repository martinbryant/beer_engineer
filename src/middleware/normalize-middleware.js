import { dataNormalized } from '../actions/data-actions'

export const normalizeMiddleware = ({ dispatch }) => next => action => {
    if (action.type.includes('_SET') && action.meta.normalizeKey) {
        const { feature, normalizeKey } = action.meta
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

export default normalizeMiddleware