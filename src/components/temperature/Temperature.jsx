import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Button, Typography, TextField } from '@material-ui/core'


const Temperature = ({ temperature, onSet, classes }) => {
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    Temperature {temperature}&deg;C
                </Typography>
                <CardActions className={classes.cardActions}>
                    <form onSubmit={onSet}>
                    </form>
                        <TextField
                            name='temp'
                            label='Temperature'
                        />
                        <Button>
                            Set
                        </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

const styles = {
    card: {
        minWidth: 150,
        maxWidth: 345,
    },
    cardActions: {
        justifyContent: 'center'
    }
}

Temperature.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Temperature);