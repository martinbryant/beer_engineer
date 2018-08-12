import { connect } from 'react-redux'

import ResultList from './result-list'
import { toggleFavourite } from '../actions/beer-actions';
import { isBeerFavourite, getSearchedBeers } from '../selectors/selectors';

const mapStateToProps = (state) => ({
    resultList: getSearchedBeers(state),
    isFavourite: isBeerFavourite(state)
})

const mapDispatchToProps = dispatch => ({
    toggleFavourite(beer) {
        return () => dispatch(toggleFavourite(beer))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultList)