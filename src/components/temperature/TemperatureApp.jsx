import React from 'react'
import {
    Typography, Button, Divider, ExpansionPanel,
    ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { getTemp, setTemp } from '../../services/temperatureService'
import Temperature from './Temperature'

class TemperatureApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            temperature: ''
        }
    }

    componentDidMount = () => { this.updateState() }

    updateState = async () => {
        const temperature = await getTemp()
        this.setState({ ...temperature })
    }

    setTemp = (event) => {
        event.preventDefault()
        const temp = event.target.temperature
        console.log('Received temperature:', temp)
        
        event.target.temperature = ''
    }
    
    render = () => {
        const { classes } = this.props
        return(
            <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    Temperature
                    </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panel}>
                <Temperature
                    { ...this.state }
                    onSet={this.setTemp}
                />
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions className={classes.panel}>
                <Button onClick={this.updateState}>
                    Update
                </Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
        )
    }
}

const styles = theme => ({
    heading: {
        fontSize: theme.typography.headings.fontSize
    },
    panel: {
        justifyContent: 'center'
    }
})

TemperatureApp.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(TemperatureApp);