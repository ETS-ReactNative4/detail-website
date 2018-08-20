import React, {Component} from 'react'
import {HashRouter, Link} from 'react-router-dom';

export default class Exterior extends Component {
    render(){
        return (
            <div>
                <h3>Exterior Only Services</h3>
                <HashRouter><Link to='/pricing'> <button>See Pricing</button> </Link></HashRouter>
                <br></br>
                <div>
                    <p>Carpet</p>
                    <p>Upholstery/Leather</p>
                    <p>Vinyl/Leather Trim</p>
                    <p>Windows</p>
                </div>
            </div>
        )
    }
}