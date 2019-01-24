import React from 'react'
import { getAll, modify } from '../services/lightService'
import LightSwitch from './LightSwitch'

class LightSwitches extends React.Component {

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
        const response = await modify(ls.id, { ...ls, on: !ls.on })
        const lightSwitches = this.state.lightSwitches
            .map(ls => ls.id === response.id ? response : ls)
        this.setState({ lightSwitches })
    }

    render = () => {
        return (
            <div>
            <h2>Light Switches</h2>
            
                {this.state.lightSwitches
                    .map(ls =>
                        <LightSwitch
                            key={ls.id}
                            onClick={this.toggleSwitch(ls)}
                            { ...ls }
                        />)
                }
            </div>
        )
    }
}

export default LightSwitches