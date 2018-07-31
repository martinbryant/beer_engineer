import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import BeerCard from './beer-card'
import { toggleFavourite } from '../actions/actions';
import { isBeerFavourite, getNeededBeerProperties } from '../selectors/selectors';

const styles = {
    container: {
        marginTop: '25px',
        marginBottom: '50px',
        paddingLeft: '50px',
        paddingRight: '50px',
        display: 'grid',
        gridRowGap: '15px',
        justifyItems: 'center',
        alignItems: 'stretch',
        alignContent: 'stretch',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
    }
};

const SearchResult = ({ classes, beerList, isFavourite, toggleFavourite }) => (
    <Grid container
        className={classes.container}>
        {beerList.map(beer => (<Grid item key={beer.id}
            className={classes.item}>
            <BeerCard beer={beer} isFavourite={isFavourite(beer)} toggleFavourite={toggleFavourite} />
        </Grid>))}
    </Grid>
)

SearchResult.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    beerList: getNeededBeerProperties(state.beerList),
    isFavourite: isBeerFavourite(state)
})

const mapDispatchToProps = dispatch => ({
    toggleFavourite(beer) {
        return () => dispatch(toggleFavourite(beer))
    }
})

const styledComp = withStyles(styles)(SearchResult)


export default connect(mapStateToProps, mapDispatchToProps)(styledComp)