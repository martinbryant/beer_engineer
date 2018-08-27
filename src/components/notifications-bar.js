import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { connect } from 'react-redux';

import { removeNotification } from '../actions/ui-actions'
import { hasNotification } from '../selectors/selectors'

const styles = {
    color: green
};

const NotificationBar = props => {
    const { classes, notifications, hasNotification, removeNotification } = props
    return (
        <div>
            <Snackbar
                className={classes.color}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={hasNotification}
                autoHideDuration={3000}
                onClose={removeNotification}
                message={<span id="message-id">{notifications.message}</span>}
            />
        </div>
    )
};

const mapStateToProps = (state) => {
    const { notifications } = state.ui
    return {
        notifications,
        hasNotification: hasNotification(state)
    }
}

const mapDispatchToProps = {
    removeNotification: removeNotification
}

const styledComp = withStyles(styles)(NotificationBar)

export default connect(mapStateToProps, mapDispatchToProps)(styledComp)