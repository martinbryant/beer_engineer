import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";

import NavBar from "./components/navbar";
import SearchPage from "./components/search-page";
import FavouritePage from "./components/favourite-page";
import NotificationBar from "./components/notifications-bar";

const styles = {
    root: {
        flexGrow: 1
    }
};

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Router basename="/beer-engineer">
                <div className={classes.root}>
                    <Route
                        render={({ location }) => (
                            <Fragment>
                                <NavBar location={location} />
                                <TransitionGroup className="transition-group">
                                    <CSSTransition
                                        key={location.key}
                                        timeout={{ enter: 500, exit: 100 }}
                                        classNames="fade"
                                    >
                                        <section className="page">
                                            <Switch location={location}>
                                                <Redirect
                                                    exact
                                                    from="/"
                                                    to="/search"
                                                />
                                                <Route
                                                    path="/search"
                                                    component={SearchPage}
                                                />
                                                <Route
                                                    path="/favourites"
                                                    component={FavouritePage}
                                                />
                                                <Route component={NoMatch} />
                                            </Switch>
                                        </section>
                                    </CSSTransition>
                                </TransitionGroup>
                                <NotificationBar />
                            </Fragment>
                        )}
                    />
                </div>
            </Router>
        );
    }
}

const NoMatch = ({ location }) => (
    <div>
        <h3>
            No beer for you at <code>{location.pathname}</code>
        </h3>
    </div>
);

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
