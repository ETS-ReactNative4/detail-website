import React, {Component} from 'react';

import './Services.css'

export default class Services extends Component {
    render(){
        return (
            <div>
                <h1>Services</h1>
                <div className='servicesWrapper'>
                    <div className='intExt'>Int/ext</div>
                    <div className='int'>Int</div>
                    <div className='ext'>Ext</div>
                </div>
            </div>
        )
    }
}