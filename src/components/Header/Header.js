import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
import Login from '../Login/Login';

import './header.css'

export default class Header extends Component {
    render(){
        return(
            <div>
                <header className='HeaderWrapper'>
                    logo
                    <HashRouter>
                        <div className='navLinks'>
                            <Link to='/' >Home</Link>
                            <Link to='/services' >Services</Link>
                            <Link to='/pricing'>Pricing</Link>
                            <Link to='/schedule'>Schedule</Link>
                            <Link to='/cart'>Shopping Cart</Link>
                        </div>
                    </HashRouter>
                    <Login />
                </header>
            </div>
        )
    }
}