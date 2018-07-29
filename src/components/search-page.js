import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import SearchBar from './search-bar';
import SearchResult from './search-result';
import Loading from './loading';

const SearchPage = ({ loadingStatus }) => (
    <Fragment>
        <SearchBar />
        {loadingStatus === 'success' && <SearchResult />}
        {loadingStatus === 'loading' && <Loading />}
    </Fragment>
)

const mapStateToProps = ({ loadingStatus }) => ({
    loadingStatus
})

export default connect(mapStateToProps)(SearchPage)