import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
import Login from '../Login/Login';

import './header.css'

export default class Header extends Component {
    render(){
        return(
            <div>
                <header className='HeaderWrapper'>
                    <img id='logo   Image' alt='mountains' src={require('../../images/MountainArt.png')}></img>
                    <div className='logo'>
                    RockyMountainDetail</div>
                    <HashRouter>
                        <div className='navLinks'>
                            <Link to='/' >Home</Link>
                            <Link to='/services' >Services</Link>
                            <Link to='/pricing'>Pricing</Link>
                            <Link to='/schedule'>Schedule</Link>
                            <Link to='/cart'>Shopping Cart</Link>
                            <Link to='/private'>Account</Link>
                        </div>
                    </HashRouter>
                    <Login />
                </header>
            </div>
        )
    }
}