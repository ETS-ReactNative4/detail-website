import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUserData} from '../../ducks/users'
import Login from '../Login/Login'
import Logout from '../Logout/Logout'
import AddACar from './AddACar/AddACar'

import '../../reset.css';
import './Private.css';

class Private extends Component {

    componentDidMount(){
        axios.get('/api/user-data').then(res => {
            this.props.updateUserData(res.data)
        })
    }

    render() {
        let {user} = this.props
        let userId = this.props.user.auth_id
        return (
            <div className='LoginPage'>
                {
                    user.user_name ? (
                        <div className='userWrapper'>
                            <div className='userInfo'>
                            {/* <h1>Account Information</h1> */}
                                <img className='userPhoto' src={user.picture} alt="" />
                                <p className='userName'>{user.user_name}</p>
                                <p className='userEmail'>{user.email}</p>
                                    <Logout />
                            </div>
                                <div>
                                    <AddACar userId={userId}/>
                                </div>
                        </div>
                    ) : <div className='PleaseLogin'>
                            {/* <h1>Account Information</h1> */}
                            <p className='TextPleaseLogin'>Please login</p> 
                            <Login className='LoginButton' /> 
                        </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {updateUserData})(Private)