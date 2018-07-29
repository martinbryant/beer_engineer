import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { getBeerListByNameStarted } from '../actions/actions'

const styles = {
    textfield: {
        width: 250
    }
};

const SearchBar = ({ classes, loadingError, submitSearch }) => (
    <Grid container justify="center">
        <form
            onSubmit={(e) => {
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
        </form>
    </Grid>
)

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ loadingError }) => ({
    loadingError
})

const mapDispatchToProps = dispatch => ({
    submitSearch(searchTerm) {
        dispatch(getBeerListByNameStarted(searchTerm))
    }
})

const styledComp = withStyles(styles)(SearchBar);

export default connect(mapStateToProps, mapDispatchToProps)(styledComp)