import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import NavBar from './components/navbar'
import SearchPage from './components/search-page'
import FavouritePage from './components/favourite-page';
import { navigateToFavourites } from './actions/actions';


const styles = {
  root: {
    flexGrow: 1,
  }
}

class App extends Component {
  render() {
    const { classes, navigateToFavourites } = this.props
    return (
      <Router>
        <div className={classes.root}>
          <Route path='/' render={({ location }) => (
            <Fragment>
              {location.pathname === '/favourites' && navigateToFavourites()}
              <NavBar location={location} />
              <Switch>
                <Redirect exact from='/' to="/search" />
                <Route path='/search' component={SearchPage} />
                <Route path="/favourites" component={FavouritePage} />
              </Switch>
            </Fragment>
          )} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  navigateToFavourites: () => dispatch(navigateToFavourites())
})

const styledComp = withStyles(styles)(App);

export default connect(null, mapDispatchToProps)(styledComp)
