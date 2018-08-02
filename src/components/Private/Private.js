import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUserData} from '../../ducks/users'
import Login from '../Login/Login'

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
        console.log(this.props)
        let {user} = this.props
        return (
            <div>
                <h1>Account Information</h1>
                {
                    user.user_name ? (
                        <div>
                            <p>Name: {user.user_name}</p>
                            <p>Email: {user.email}</p>
                            <p>Account Number: {user.auth_id}</p>
                            <img src={user.picture} alt="" />
                            <a href="http://localhost:4000/api/logout"><button>Logout</button></a>
                        </div>
                    ) : <p>Please log in. <Login /></p> 
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