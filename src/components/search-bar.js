import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { fetchBeerByName, fetchBeerRandom } from '../actions/beer-actions';
import { updateNoOfRandomBeers } from '../actions/ui-actions'

const styles = {
    textfield: {
        width: 250
    },
    formControl: {
        minWidth: 135
    }
};

const SearchBar = ({ classes, loadingError, noOfRandomBeers, submitSearch, getRandomBeers, updateNoOfRandomBeers }) => (
    <Grid container justify="center">
        <form
            onSubmit={e => {
                e.preventDefault();
                let searchTerm = e.target['search'].value
                searchTerm && submitSearch(searchTerm);
            }}>
            <TextField
                id="search"
                label="Search beers"
                type="search"
                className={classes.textField}
                margin="normal"
                helperText={loadingError}
            />
            <IconButton
                type="submit"
                aria-label="Search">
                <SearchIcon />
            </IconButton>
            <Button
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
        </form>
    </Grid>
)

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const { noOfRandomBeers } = state.ui
    return {
        noOfRandomBeers
    }
}

const mapDispatchToProps = dispatch => ({
    submitSearch(searchTerm) {
        dispatch(fetchBeerByName(searchTerm))
    },
    getRandomBeers(noOfBeers) {
        dispatch(fetchBeerRandom(noOfBeers))
    },
    updateNoOfRandomBeers(noOfBeers) {
        dispatch(updateNoOfRandomBeers(noOfBeers))
    }
})

const styledComp = withStyles(styles)(SearchBar);

export default connect(mapStateToProps, mapDispatchToProps)(styledComp)