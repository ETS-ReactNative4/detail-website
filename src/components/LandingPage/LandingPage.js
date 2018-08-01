import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';


import './LandingPage.css'
import powerWasher from '../../images/foam-cannon.jpg';

export default class LandingPage extends Component {
    render (){
        return(
            <div>
                <p>LandingPage (Home)</p>
                <div>
                    <HashRouter>
                        <div className='pictureLinks'>
                            <Link to='/services' ><button>Services</button></Link>
                            <Link to='/scheduling' ><button>Schedule Now</button></Link>
                        </div>
                    </HashRouter>
                </div>
                <div className='LandingPageWrapper'>
                    <img src={powerWasher} alt="" />
                </div>
            </div>
        )
    }
}