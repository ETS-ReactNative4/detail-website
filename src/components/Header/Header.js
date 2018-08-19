import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
import Login from '../Login/Login';

import '../../reset.css'
import '../../index.css'
import './header.css'

export default class Header extends Component {
    render(){
        const logo = <div className='logo'>RockyMountainDetail</div>
        const home =
        <HashRouter><Link to='/' >
            <href>
                <img 
                    id='logoImage' 
                    alt='mountains' 
                    src={require('../../images/MountainArt.png')}>
                </img>
            </href>
        </Link>
        </HashRouter>
        const services = <HashRouter><Link to='/services' >Services</Link></HashRouter>
        const pricing = <HashRouter><Link to='/pricing'>Pricing</Link></HashRouter>
        const contact = <HashRouter><Link to='/contact'>Contact</Link></HashRouter>
        const feedback = <HashRouter><Link to='/feedback'>Feedback</Link></HashRouter>
        const account = <HashRouter><Link to='/private'>Account</Link></HashRouter>

        return(
            <div>
                <nav className='HeaderWrapper'>
                {home}
                {logo}
                        <ul className='navLinks'>
                            {/* <li>{home}</li> */}
                            <li>{services}</li>
                            <li>{pricing}</li>
                            <li>{contact}</li>
                            <li>{feedback}</li>
                            <li>{account}</li>
                        </ul>
                    <Login />
                    <img className='hamburger' src={require('../../images/hamburger_menu.svg')} alt="" ></img>
                </nav>
            </div>
        )
    }
}