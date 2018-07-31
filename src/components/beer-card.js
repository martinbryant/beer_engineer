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
        width: 200,
        display: 'grid',
        height: '100%'
    },
    icon: {
        marginLeft: 'auto'
    },
    star: {
        color: 'gold'
    },
    action: {
        padding: '0px',
        height: '48px',
        alignSelf: 'end'
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

function BeerCard({ classes, beer, isFavourite, toggleFavourite }) {
    const { card, content, star, icon, action } = classes;
    const { image_url, name, id, tagline } = beer;
    return (
        <Card className={card}>
            <Image src={image_url}
                alt={name}
                style={clearImagePadding}
                imageStyle={imageStyle} />
            <CardContent className={content}>
                <Typography
                    gutterBottom
                    align="center"
                    variant="title"
                    component="h2">
                    {name}
                </Typography>
                <Typography
                    component="p"
                    align="center">
                    {tagline}
                </Typography>
            </CardContent>
            <CardActions className={action}>
                <IconButton
                    aria-label="Add to favorites"
                    className={icon}
                    value={id}
                    onClick={toggleFavourite(beer)}>
                    <StarIcon className={(isFavourite) ? star : ''} />
                </IconButton>
            </CardActions>
        </Card>
    );
}

BeerCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerCard);
