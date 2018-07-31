import { connect } from 'react-redux'

import ResultList from './result-list';
import { toggleFavourite } from '../actions/actions';
import { isBeerFavourite } from '../selectors/selectors';

const mapStateToProps = (state) => ({
    resultList: state.favouriteList,
    isFavourite: isBeerFavourite(state)
})

const mapDispatchToProps = dispatch => ({
    toggleFavourite(beer) {
        return () => dispatch(toggleFavourite(beer))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultList)