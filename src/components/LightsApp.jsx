import React from 'react'
import '../styles/LightsApp.css'
import LightSwitches from './LightSwitches'


class LightsApp extends React.Component {
    render = () => {
        return(
            <div className="LightsApp">
                <LightSwitches />
            </div>
        )
    }
}

export default LightsApp