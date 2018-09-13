import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import { fetchBeerRandom } from '../actions/beer-actions';
import { updateNoOfRandomBeers } from '../actions/ui-actions'

const styles = {
    formControl: {
        minWidth: 135
    },
    button: {
        minWidth: 90
    }
}

const RandomBar = ({ classes, noOfRandomBeers, getRandomBeers, updateNoOfRandomBeers }) => (
    <Grid container justify="center">
        <Button
            className={classes.button}
            onClick={e => getRandomBeers(noOfRandomBeers)}
            variant="contained"
            size="small"
            color="primary">
            {noOfRandomBeers} Random
        </Button>
        <FormControl className={classes.formControl}>
            <InputLabel >How many beers?</InputLabel>
            <Select
                value={noOfRandomBeers}
                onChange={e => updateNoOfRandomBeers(e.target.value)}
                inputProps={{
                    name: 'number',
                    id: 'beers',
                }}
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
            </Select>
        </FormControl>
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
    },
    updateNoOfRandomBeers(noOfBeers) {
        dispatch(updateNoOfRandomBeers(noOfBeers))
    }
})

const styledComp = withStyles(styles)(RandomBar);

export default connect(mapStateToProps, mapDispatchToProps)(styledComp)