import React from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import {logout} from '../../ducks/users'



class Logout extends React.Component{

        logout(){
        axios.get('/api/logout').then(() => {
            this.props.logout()
        })
    }

    render(){

        return (
            <div>
        <button className='login button' onClick={() => this.logout()}>Logout</button>
    </div>
    )}
}

export default connect(null, {logout})(Logout)