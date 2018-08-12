import { API_REQUEST, apiSuccess, apiError } from "../actions/api-actions";

export const apiMiddleware = ({ dispatch }) => next => action => {
    next(action)
    if (action.type.includes(API_REQUEST)) {
        const { url, method, feature } = action.meta
        const successResponse = res => dispatch(apiSuccess(res, feature))
        const errorResponse = err => dispatch(apiError(err, feature))
        return fetch(url, method)
            .then(isResponseOk)
            .then(convertToJson)
            .then(successResponse)
            .catch(errorResponse)
    }
}

const convertToJson = res => res.json()
const isResponseOk = res => res.ok ? Promise.resolve(res) : Promise.reject(Error('Network Response Error'))