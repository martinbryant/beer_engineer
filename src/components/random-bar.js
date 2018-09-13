import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

import { fetchBeerRandom } from '../actions/beer-actions'

const styles = {
    formControl: {
        minWidth: 135
    },
    button: {
        marginRight: 10,
        marginLeft: 10,
        minWidth: 90
    }
}

const RandomBar = ({ classes, getRandomBeers }) => (
    <Grid container justify="center">
        <Button
            className={classes.button}
            onClick={e => getRandomBeers(5)}
            variant="contained"
            size="small"
            color="primary">
            5 Random
        </Button>
        <Button
            className={classes.button}
            onClick={e => getRandomBeers(10)}
            variant="contained"
            size="small"
            color="primary">
            10 Random
        </Button>

    </Grid>
)

RandomBar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const { noOfRandomBeers } = state.ui
    return {
        noOfRandomBeers
    }
}


const mapDispatchToProps = (dispatch) => ({
    getRandomBeers(noOfBeers) {
        dispatch(fetchBeerRandom(noOfBeers))
    }
})

const styledComp = withStyles(styles)(RandomBar);

export default connect(mapStateToProps, mapDispatchToProps)(styledComp)