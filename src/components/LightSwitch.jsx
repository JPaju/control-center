import React from 'react'
import PropTypes from 'prop-types';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 345,
        marginBottom: 100
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}

const LightSwitch = ({ id, on, onClick, classes }) => {
    
    const text = on ? 'OFF' : 'ON'
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Switch {id}
                </Typography>
                <p>State: {on ? 'ON' : 'OFF'}</p>
                <CardActions>
                    <Button onClick={onClick}>Turn {text}</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

LightSwitch.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LightSwitch)