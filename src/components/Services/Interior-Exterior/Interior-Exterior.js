import React, {Component} from 'react'
import {HashRouter, Link} from 'react-router-dom';

export default class InteriorExterior extends Component {
    render(){
        return (
            <div>
                <h3>Interior/Exterior Services</h3>
                <HashRouter><Link to='/pricing'> <button>See Pricing</button> </Link></HashRouter>
                <br></br>
                <div>
                    <p>Engine Bay</p>
                    <p>Exterior Hand Wash</p>
                    <p>Clay bar/ Wax</p>
                    <p>Carpet</p>
                    <p>Upholstery/Leather</p>
                    <p>Vinyl/Leather Trim</p>
                    <p>Windows</p>
                </div>
            </div>
        )
    }
}