import React from "react";
import { connect } from "react-redux";

import SearchBar from "./search-bar";
import RandomBar from "./random-bar";
import SearchResult from "./search-result";
import Loading from "./loading";

const SearchPage = ({ isLoading }) => (
    <section className="page-wrapper">
        <SearchBar />
        <RandomBar />
        {isLoading ? <Loading /> : <SearchResult />}
    </section>
);

const mapStateToProps = ({ ui: { isLoading } }) => ({
    isLoading
});

export default connect(mapStateToProps)(SearchPage);
