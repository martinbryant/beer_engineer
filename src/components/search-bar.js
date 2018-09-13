import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'


import { fetchBeerByName } from '../actions/beer-actions';

const styles = {
    textfield: {
        width: 250
    },
    grid: {
        marginBottom: 20
    }
};

const SearchBar = ({ classes, loadingError, submitSearch }) => (
    <Grid className={classes.grid}
        container
        justify="center">
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
        </form>
    </Grid>
)

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
    submitSearch(searchTerm) {
        dispatch(fetchBeerByName(searchTerm))
    }
})

const styledComp = withStyles(styles)(SearchBar);

export default connect(null, mapDispatchToProps)(styledComp)