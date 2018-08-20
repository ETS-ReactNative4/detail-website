import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
// import Login from '../Login/Login';

import '../../reset.css'
import '../../index.css'
import './header.css'

export default class Header extends Component {
    render(){
        const companyName = <HashRouter><Link to='/' ><div className='companyName'>RockyMountainDetail</div></Link></HashRouter>
        const home =
        <HashRouter><Link to='/' >
            <a>
                <img 
                    id='logoImage' 
                    alt='mountains' 
                    src={require('../../images/MountainArt.png')}>
                </img>
            </a>
        </Link></HashRouter>
        const services = <HashRouter><Link to='/services' >Services</Link></HashRouter>
        const pricing = <HashRouter><Link to='/pricing'>Pricing</Link></HashRouter>
        const contact = <HashRouter><Link to='/contact'>Contact</Link></HashRouter>
        const account = <HashRouter><Link to='/private'>Account</Link></HashRouter>
        const login = <HashRouter><Link to='/private'>Login</Link></HashRouter>

        return(
            <header>
                {home}
                {companyName}
                <nav className='HeaderWrapper'>
                    <ul>
                        <li>{services}</li>
                        <li>{pricing}</li>
                        <li>{contact}</li>
                        <li>{account}</li>
                        <li>{login}</li>
                    </ul>
                    <img className='hamburger' src={require('../../images/hamburger_menu.svg')} alt="" ></img>
                </nav>
            </header>
        )
    }
}