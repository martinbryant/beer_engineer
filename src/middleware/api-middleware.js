import { API_REQUEST, apiSuccess, apiError } from "../actions/api-actions";

export const apiMiddleware = ({ dispatch }) => next => action => {
    next(action)
    if (action.type.includes(API_REQUEST)) {
        const { url, method, feature } = action.meta
        const successResponse = res => dispatch(apiSuccess(res, feature))
        const errorResponse = err => dispatch(apiError(err, feature))
        let urls = []
        if (typeof url === 'string') {
            urls = [...urls,
                url]
        } else {
            urls = url
        }
        const getAllUrls = async (urls) => {
            try {
                var data = await Promise.all(urls.map(url =>
                    fetch(url, { method })
                        .then(isResponseOk)
                        .then(convertToJson)
                        .catch(errorResponse)))
                return data
            }
            catch (error) {
                return error
            }
        }
        return getAllUrls(urls)
            .then(flattenResponse)
            .then(successResponse)
            .catch(errorResponse)
    }
}

export default apiMiddleware

const isResponseOk = res => res.ok ? Promise.resolve(res) : Promise.reject(Error('Network Response Error'))

const convertToJson = res => res.json()

const flattenResponse = res => Promise.resolve(res.reduce((acc = [], curr) => [...acc, ...curr]))
