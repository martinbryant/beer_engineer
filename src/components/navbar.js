import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import Badge from '@material-ui/core/Badge'

import { getNoOfFavourites } from '../selectors/selectors'


const styles = {
    flex: {
        flex: 1,
    },
    tabsIndicator: {
        backgroundColor: 'white'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    flexContainer: {
        minHeight: '80px'
    }
};

const NavBar = ({ classes, location, noOfFavourites }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
                Beer Engineer
          </Typography>
            <Tabs
                value={location.pathname === '/search' ? 0 : 1}
                fullWidth
                textColor="inherit"
                classes={{
                    root: classes.tabsRoot,
                    indicator: classes.tabsIndicator,
                    flexContainer: classes.flexContainer
                }} >
                <Tab icon={<SearchIcon />} label="Search Beers" component={Link} to="/search" />
                <Tab icon={noOfFavourites > 0 ?
                    <Badge badgeContent={noOfFavourites} color="secondary">
                        <StarIcon />
                    </Badge>
                    : <StarIcon />} label="Favourites" component={Link} to="/favourites" />
            </Tabs>
        </Toolbar>
    </AppBar>
)

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    noOfFavourites: getNoOfFavourites(state)
})

const styledComp = withStyles(styles)(NavBar)

export default connect(mapStateToProps)(styledComp)