import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';

import './Services.css'
import InteriorExterior from './Interior-Exterior/Interior-Exterior'
import Interior from './InteriorOnly/InteriorOnly'
import Exterior from './ExteriorOnly/ExteriorOnly'

export default class Services extends Component {
    render(){
        return (
            <div>
                <h1>Services</h1>
                <div>
                    <HashRouter>
                        <div className='servicesWrapper'>
                            <div className='intExt'>
                                <InteriorExterior />
                                <Link to='/pricing'> <button>See Pricing</button> </Link>
                            </div>
                            <div className='int'>
                                <Interior />
                                <Link to='/pricing'> <button>See Pricing</button> </Link>
                            </div>
                            <div className='ext'>
                                <Exterior />
                                <Link to='/pricing'> <button>See Pricing</button> </Link>
                            </div>
                        </div>
                    </HashRouter>
                </div>
            </div>
        )
    }
}