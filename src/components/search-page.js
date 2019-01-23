import React, { Fragment } from "react";
import { connect } from "react-redux";

import SearchBar from "./search-bar";
import RandomBar from "./random-bar";
import SearchResult from "./search-result";
import Loading from "./loading";

const SearchPage = ({ isLoading }) => (
    <Fragment>
        <SearchBar />
        <RandomBar />
        {isLoading ? <Loading /> : <SearchResult />}
    </Fragment>
);

const mapStateToProps = ({ ui: { isLoading } }) => ({
    isLoading
});

export default connect(mapStateToProps)(SearchPage);
