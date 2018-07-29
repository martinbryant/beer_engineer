import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import BeerCard from './beer-card'
import { setBeerAsFavourite } from '../actions/actions';

const styles = {
    beerContainer: {
        marginTop: '25px'
    }
};

const SearchResult = ({ classes, beerList, toggleFavourite }) => (
    <Grid container
        className={classes.beerContainer}
        justify="center"
        spacing={24}>
        {beerList.map(beer => (<Grid item key={beer.id}>
            <BeerCard beer={beer} toggleFavourite={toggleFavourite} />
        </Grid>))}
    </Grid>
)

SearchResult.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ beerList }) => ({
    beerList
})

const mapDispatchToProps = dispatch => ({
    toggleFavourite(id) {
        return () => dispatch(setBeerAsFavourite(id))
    }
})

const styledComp = withStyles(styles)(SearchResult)


export default connect(mapStateToProps, mapDispatchToProps)(styledComp)