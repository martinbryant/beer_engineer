import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'

import { fetchBeerRandom } from '../actions/beer-actions';
import { updateNoOfRandomBeers } from '../actions/ui-actions'

const styles = {
    formControl: {
        minWidth: 135
    },
    button: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 20,
        minWidth: 90,
        maxHeight: 20
    },
    fgroup: {
        flexDirection: 'row'
    }
}

const RandomBar = ({ classes, noOfRandomBeers, getRandomBeers, updateNoOfRandomBeers }) => (
    <Grid container justify="center">
        <FormGroup className={classes.fgroup}>
            <Button
                className={classes.button}
                onClick={e => getRandomBeers(noOfRandomBeers)}
                variant="contained"
                size="small"
                color="primary">
                {noOfRandomBeers} Random
        </Button>
            <RadioGroup
                value={noOfRandomBeers}
                onChange={(e, value) => updateNoOfRandomBeers(value)}>
                <FormControlLabel value="5" control={<Radio />} label={5} />
                <FormControlLabel value="10" control={<Radio />} label={10} />
            </RadioGroup>
        </FormGroup>
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