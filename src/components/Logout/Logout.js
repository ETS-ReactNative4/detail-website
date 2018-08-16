import React from 'react';
import Link from 'react-router-dom';
import axios from "axios";

const {REACT_APP_FULL_SERVER_URL} = process.env;

export default class logout extends React.Component{
    render(){

        console.log("hello")
        return (
            <div>
        <button className='login button' onClick={() => {axios.get('/api/logout')}}>Logout</button>
    </div>
    )}
}