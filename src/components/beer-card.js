import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Image from 'material-ui-image';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star'

const styles = {
    card: {
        maxWidth: 200,
    },
    icon: {
        marginLeft: 'auto'
    },
    star: {
        color: 'gold'
    },
    image: {
        display: 'block',
        height: '150px',
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: '10px',
        position: 'relative',
        width: 'auto'
    },
    action: {
        padding: '0px'
    }

};

const clearImagePadding = {
    paddingTop: 0
}

const imageStyle = {
    display: 'block',
    height: '150px',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: '10px',
    position: 'relative',
    width: 'auto'
}

function BeerCard({ classes, beer, toggleFavourite }) {
    const { card, star, icon, action } = classes;
    const { image_url, name, id, tagline, isFavourite } = beer;
    return (
        <div>
            <Card className={card}>
                <Image src={image_url}
                    alt={name}
                    style={clearImagePadding}
                    imageStyle={imageStyle} />
                <CardContent>
                    <Typography gutterBottom align="center" variant="title" component="h2">
                        {name}
                    </Typography>
                    <Typography component="p" align="center">
                        {tagline}
                    </Typography>
                </CardContent>
                <CardActions className={action}>
                    <IconButton
                        aria-label="Add to favorites"
                        className={icon}
                        value={id}
                        onClick={toggleFavourite(id)}>
                        <StarIcon className={(isFavourite) ? star : ''} />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}

BeerCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerCard);
