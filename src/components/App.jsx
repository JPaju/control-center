import React, { Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import {
    AppBar, Toolbar, Typography, CssBaseline
} from '@material-ui/core'
import Theme from '../Theme'
import LightsApp from './lights/LightsApp'
import TemperatureApp from './temperature/TemperatureApp'


class App extends React.Component {

    render = () => {
        return (
            <Fragment>
                <CssBaseline />
                    <MuiThemeProvider theme={Theme}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" color="inherit" >
                                    Control Center
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <LightsApp />
                        <TemperatureApp />
                    </MuiThemeProvider>
            </Fragment>
        )
    }
}

export default App