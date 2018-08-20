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
                <br></br>
                <br></br>
                <p className='title'>Pricing</p>
                <br></br>
                <br></br>
                <div>
                    <Switch onClick={this.toggleSwitch} on={this.state.switched}/>
                    {this.state.switched ? 
                        <div>
                            <p>Toggle for one-time pricing</p>
                            <br></br>
                            <p className='subStatement'>We detail your car every other month!</p>
                        </div> 
                        : 
                        <p>Toggle for subscription pricing</p>}
                </div>
                {/* <p className='title'>Pricing</p> */}
                <div className='pricingContainer'>
                    <div className='rows'>
                        <p>Rows</p>
                        <br></br>
                        <br></br>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>Per Add'l Row</p>
                    </div>
    {/* Interior/Exterior */}
                    <div className='intExt'>
                        <p>Interior/Exterior</p>
                        <br></br>
                        <br></br>
                        {!this.state.switched ? 
                            <div>
                            <p>$125</p>
                            <p>$150</p>
                            <p>$200</p>
                            <p>$35</p>
                            </div>
                            :
                            <div>
                            <p>$40 per month</p>
                            <p>$50 per month</p>
                            <p>$65 per month</p>
                            <p>$15 per month</p>
                            </div>
                        }
                    </div>
    {/* Interior Only */}
                    <div className='int'>
                    <p>Interior Only</p>
                        <br></br>
                        <br></br>
                        {!this.state.switched ? 
                            <div>
                            <p>$75</p>
                            <p>$100</p>
                            <p>$150</p>
                            <p>$25</p>
                            </div>
                            :
                            <div>
                            <p>$25 per month</p>
                            <p>$35 per month</p>
                            <p>$50 per month</p>
                            <p>$10 per month</p>
                            </div>
                        }
                    </div>
    {/* Exterior Only */}
                    <div className='ext'>
                    <p>Exterior Only</p>
                        <br></br>
                        <br></br>
                        {!this.state.switched ? 
                            <div>
                            <p>$75</p>
                            <p>$90</p>
                            <p>$125</p>
                            <p>$20</p>
                            </div>
                            :
                            <div>
                            <p>$25 per month</p>
                            <p>$30 per month</p>
                            <p>$40 per month</p>
                            <p>$10 per month</p>
                            </div>
                        }
                    </div>
                </div>
                <div><HashRouter><Link to='/private'> <button id='bookingButton'>Book Service</button> </Link></HashRouter></div>
                <div className='disclaimer'>
                    <p>**Prices are subject to increase based on time spent cleaning. This happens to approx 1% of the cars we detail.</p>
                </div>
            </div>
        )
    }
}