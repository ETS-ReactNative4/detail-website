import React from 'react';
import axios from "axios";


export default class logout extends React.Component{
    render(){

        console.log("hello")
        return (
            <div>
        <button className='login button' onClick={() => {axios.get('/api/logout')}}>Logout</button>
    </div>
    )}
}