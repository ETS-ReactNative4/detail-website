import React, {Component} from 'react';

import './Services.css'
import InteriorExterior from './Interior-Exterior/Interior-Exterior'
import Interior from './InteriorOnly/InteriorOnly'
import Exterior from './ExteriorOnly/ExteriorOnly'

export default class Services extends Component {
    render(){
        return (
            <div>
                <h1>Services</h1>
                <div className='servicesWrapper'>
                    <div className='intExt'>
                        <InteriorExterior />
                    </div>
                    <div className='int'>
                        <Interior />
                    </div>
                    <div className='ext'>
                        <Exterior />
                    </div>
                </div>
            </div>
        )
    }
}