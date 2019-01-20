import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import { fetchBeerByName } from "../actions/beer-actions";
import { validateSearchTerm } from "../actions/ui-actions";

const styles = {
    textfield: {
        width: 250
    },
    grid: {
        marginBottom: 20
    }
};

const SearchBar = ({
    classes,
    searchValidationError,
    validateSearchForm,
    submitSearch
}) => (
    <Grid className={classes.grid} container justify="center">
        <form
            onSubmit={e => {
                e.preventDefault();
                let searchTerm = e.target["search"].value;
                !searchValidationError && submitSearch(searchTerm);
            }}
            autoComplete="off"
        >
            <TextField
                error={searchValidationError ? true : false}
                id="search"
                label="Search beers"
                type="search"
                className={classes.textField}
                margin="normal"
                helperText={searchValidationError}
                onChange={e => {
                    let searchTerm = e.target.value;
                    validateSearchForm(searchTerm);
                }}
            />
            <IconButton
                type="submit"
                aria-label="Search"
                disabled={searchValidationError ? true : false}
            >
                <SearchIcon />
            </IconButton>
        </form>
    </Grid>
);

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ ui: { searchValidationError } }) => ({
    searchValidationError
});

const mapDispatchToProps = dispatch => ({
    submitSearch(searchTerm) {
        dispatch(fetchBeerByName(searchTerm));
    },
    validateSearchForm(searchTerm) {
        dispatch(validateSearchTerm(searchTerm));
    }
});

const styledComp = withStyles(styles)(SearchBar);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(styledComp);
