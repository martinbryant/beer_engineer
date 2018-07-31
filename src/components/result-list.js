import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import BeerCard from './beer-card'

const styles = {
    container: {
        marginTop: '25px',
        marginBottom: '50px',
        paddingLeft: '50px',
        paddingRight: '50px',
        display: 'grid',
        gridRowGap: '15px',
        justifyItems: 'center',
        alignItems: 'stretch',
        alignContent: 'stretch',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
    }
};

const ResultList = ({ classes, resultList, isFavourite, toggleFavourite }) => (
    <Grid container
        className={classes.container}>
        {resultList.map(beer => (<Grid item key={beer.id}
            className={classes.item}>
            <BeerCard beer={beer} isFavourite={isFavourite(beer)} toggleFavourite={toggleFavourite} />
        </Grid>))}
    </Grid>
)

ResultList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultList)