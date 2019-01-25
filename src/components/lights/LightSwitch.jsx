import React from 'react'
import PropTypes from 'prop-types';
import { Card, CardContent, CardActions, Typography, Switch, FormControlLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    card: {
        minWidth: 150,
        maxWidth: 345,
    },
    cardActions: {
        justifyContent: 'center'
    }
}

const LightSwitch = ({ id, on, onClick, classes }) => {

    const label = on ? 'Turn Off' : 'Turn On'
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    Light {id}
                </Typography>
                <CardActions className={classes.cardActions}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={on}
                                onChange={onClick}
                            />
                        }
                        label={label}
                    />
                </CardActions>
            </CardContent>
        </Card>
    )
}

LightSwitch.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LightSwitch)