import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions,
    Button, Typography, TextField
} from '@material-ui/core'

const styles = theme => ({
    card: {
        minWidth: 150,
        maxWidth: 345,
    },
    cardActions: {
        justifyContent: 'center',
        display: 'flex'
    },
    tempInput: {
        width: 70,
        height: 40,
        margin: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit
    }
})

const Temperature = ({ temperature, newTemp, onChange, onSet, classes }) => {
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    Temperature {temperature}&deg;C
                </Typography>
                <CardActions className={classes.cardActions}>
                    <form onSubmit={onSet} className={classes.cardActions}>
                        <TextField
                            name='temp'
                            className={classes.tempInput}
                            type='number'
                            step='1'
                            variant='outlined'
                            value={newTemp}
                            onChange={onChange}
                        />
                        <Button type='submit' variant='contained' color='primary' className={classes.button}>
                            Set
                        </Button>
                    </form>
                </CardActions>
            </CardContent>
        </Card>
    )
}


Temperature.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Temperature);