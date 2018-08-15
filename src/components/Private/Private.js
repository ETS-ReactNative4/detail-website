import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUserData} from '../../ducks/users'
import Login from '../Login/Login'
import Logout from '../Logout/Logout'
import AddACar from './AddACar/AddACar'

import './Private.css'

class Private extends Component {

    componentDidMount(){
        axios.get('/api/user-data').then(res => {
            this.props.updateUserData(res.data)
        })
    }

    logout(){
        axios.get('/api/logout').then(res => {
            this.props.history.push('/')
        })
    }

    render() {
        let {user} = this.props
        console.log(user)
        console.log(this.props.user.auth_id)
        let userId = this.props.user.auth_id
        return (
            <div>
                <h1>Account Information</h1>
                {
                    user.user_name ? (
                        <div className='userInfo'>
                            <img src={user.picture} alt="" />
                            <p>{user.user_name}</p>
                            <p>{user.email}</p>
                            <Logout />
                            <AddACar userId={userId}/>
                        </div>
                    ) : <div>
                            <p>Please log in.</p> 
                            <Login /> 
                            {/* <AddACar /> */}
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