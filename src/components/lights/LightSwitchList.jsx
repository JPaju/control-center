import React from 'react'
import { Grid } from '@material-ui/core'
import LightSwitch from './LightSwitch'

const LightSwitchList = ({ lightSwitches, toggleSwitch }) => {
    return (
        <Grid container spacing={16} justify='center'>
            {lightSwitches
                .map(ls =>
                    <Grid item key={ls.id}>
                        <LightSwitch
                            key={ls.id}
                            onClick={toggleSwitch(ls)}
                            {...ls}
                        />
                    </Grid>
                )
            }
        </Grid>
    )
}

export default LightSwitchList