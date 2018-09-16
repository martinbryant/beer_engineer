import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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
import NotificationBar from './components/notifications-bar'


const styles = {
  root: {
    flexGrow: 1,
  }
}

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className={classes.root}>
          <Route path={`${process.env.PUBLIC_URL}/`} render={({ location }) => (
            <Fragment>
              <NavBar location={location} />
              <Switch>
                <Redirect exact from={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/search`} />
                <Route path={`${process.env.PUBLIC_URL}/search`} component={SearchPage} />
                <Route path={`${process.env.PUBLIC_URL}/favourites`} component={FavouritePage} />
              </Switch>
              <NotificationBar />
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

export default withStyles(styles)(App);
