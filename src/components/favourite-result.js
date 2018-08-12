import { connect } from 'react-redux'

import ResultList from './result-list';
import { toggleFavourite } from '../actions/beer-actions';
import { isBeerFavourite, getFavouriteBeers } from '../selectors/selectors';

const mapStateToProps = (state) => ({
    resultList: getFavouriteBeers(state),
    isFavourite: isBeerFavourite(state)
})

const mapDispatchToProps = dispatch => ({
    toggleFavourite(beer) {
        return () => dispatch(toggleFavourite(beer))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultList)