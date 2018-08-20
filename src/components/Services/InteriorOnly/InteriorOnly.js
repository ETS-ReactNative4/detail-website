import React, {Component} from 'react'
import {HashRouter, Link} from 'react-router-dom';

export default class Interior extends Component {
    render(){
        return (
            <div>
                <h3>Interior Only Services</h3>
                <HashRouter><Link to='/pricing'> <button className='servicesButton'>See Pricing</button> </Link></HashRouter>
                <br></br>
                <div>
                    <p>Engine Bay</p>
                    <p>Hand Wash</p>
                    <p>Clay bar/ Wax</p>
                    <p>Windows</p>
                </div>

            </div>
        )
    }
}