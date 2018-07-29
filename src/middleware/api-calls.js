import * as actions from '../actions/actions';
import { GET_BEER_LIST_BY_NAME_STARTED } from '../actions/constants'

export const apiCalls = state => next => action => {
    const nextSuccess = res => next(actions.getBeerListByNameSuccess(res));
    const nextFailure = err => next(actions.getBeerListByNameFailure(err.message));
    next(action);
    if (action.type === GET_BEER_LIST_BY_NAME_STARTED) {
        return fetch(searchByNameUrl(action.searchTerm))
            .then(isResponseOK)
            .then(convertToJson)
            .then(hasResults)
            .then(nextSuccess)
            .catch(nextFailure)
    }
}

const searchByNameUrl = name => `https://api.punkapi.com/v2/beers?beer_name=${name}`

const isResponseOK = res => res.ok ? Promise.resolve(res) : Promise.reject(new Error('Fetching failed'))
const hasResults = res => res.length > 0 ? Promise.resolve(res) : Promise.reject(new Error('No results found'))
const convertToJson = res => res.json();

export {
    isResponseOK,
    hasResults,
    convertToJson
}