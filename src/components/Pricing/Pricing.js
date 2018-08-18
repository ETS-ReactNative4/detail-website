import React, {Component} from 'react';
import Switch from 'react-toggle-switch';
import {HashRouter, Link} from 'react-router-dom';

import './Pricing.css'
// import '../../../node_modules/react-toggle-switch/dist/css/switch.min.css'

export default class Pricing extends Component {
    constructor(props){
        super(props);

        this.state = {
            switched: false
        }
    }

    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !prevState.switched
            }
        })
    }

    render(){
        console.log(this.state)
        return (
            <div className='pricingWrapper'>
                <h1>Pricing</h1>
                <div>
                    <Switch onClick={this.toggleSwitch} on={this.state.switched}/>
                    {this.state.switched ? <p>Toggle for one-time pricing</p> : <p>Toggle for subscription pricing</p>}
                </div>
                <div className='pricingContainer'>
                    <div>column 1</div>
                    <div>column 2</div>
                    <div>column 3</div>
                    <div>column 4</div>
                </div>
                <HashRouter>
                    <Link to='/private'> <button>Book Service</button> </Link>
                </HashRouter>
            </div>
        )
    }
}