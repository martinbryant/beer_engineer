import * as actions from '../actions/actions';
import { GET_BEER_LIST_BY_NAME_STARTED } from '../actions/constants'

export const apiMiddleware = state => next => action => {
    next(action);
    if (action.type === GET_BEER_LIST_BY_NAME_STARTED) {
        return fetch('https://api.punkapi.com/v2/beers')
            .then(isResponseOK)
            .then(convertToJson)
            .then(hasResults)
            .then(res => {
                next(actions.getBeerListByNameSuccess(res.body))
            })
            .catch(err => {
                next(actions.getBeerListByNameFailure(err))
            })
    }
}

const searchByNameUrl = name => 'https://api.punkapi.com/v2/beers?beer_name=' + name

const isResponseOK = res => res.ok ? Promise.resolve(res) : Promise.reject(res.statusText)
const hasResults = res => res.length > 0 ? Promise.resolve(res) : Promise.reject('No results found')
const convertToJson = res => res.json();