import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import BeerCard from './beer-card'
import { toggleFavourite } from '../actions/actions';

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

const ResultDisplay = ({ classes, favouriteList, toggleFavourite }) => (
    <Grid container
        className={classes.container}>
        {favouriteList.map(beer => (<Grid item key={beer.id}
            className={classes.item}>
            <BeerCard beer={beer} toggleFavourite={toggleFavourite} />
        </Grid>))}
    </Grid>
)

ResultDisplay.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ favouriteList }) => ({
    favouriteList
})

const mapDispatchToProps = dispatch => ({
    toggleFavourite(id) {
        return () => dispatch(toggleFavourite(id))
    }
})

const styledComp = withStyles(styles)(ResultDisplay)


export default connect(mapStateToProps, mapDispatchToProps)(styledComp)