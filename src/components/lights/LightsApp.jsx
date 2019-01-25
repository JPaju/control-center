import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Typography, Button, Divider, ExpansionPanel,
    ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { getAll, modify } from '../../services/lightService'
import LightSwitchList from './LightSwitchList';


class LightsApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lightSwitches: []
        }
    }

    componentDidMount = () => { this.updateState() }

    updateState = async () => {
        const lightSwitches = await getAll()
        this.setState({ lightSwitches })
    }

    toggleSwitch = ls => async (event) => {
        event.preventDefault()
        const response = await modify(ls.id, { on: !ls.on })
        const lightSwitches = this.state.lightSwitches
            .map(ls => ls.id === response.id ? response : ls)
        this.setState({ lightSwitches })
    }

    render = () => {


        const { classes } = this.props
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                        Light Switces
                        </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <LightSwitchList
                        lightSwitches={this.state.lightSwitches}
                        toggleSwitch={this.toggleSwitch}
                    />
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions className={classes.panelActions}>
                    <Button onClick={this.updateState}>
                        Update All
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
    panelActions: {
        justifyContent: 'center'
    }
})

LightsApp.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(LightsApp);