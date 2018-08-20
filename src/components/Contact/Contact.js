import React, {Component} from 'react';
import TextForm from './TextForm/TextForm'

import '../../reset.css'
import './Contact.css'

export default class Contact extends Component {
    render(){
        return (
            <div className='ContactWrapper'>
            <h1 className='Contact'>Contact</h1>
                <div className='PhoneNumber'>
                    <p>801-785-9719</p>
                    <br></br>
                    <br></br>
                    <p>-OR-</p>
                    <br></br>
                    <br></br>
                    <p>Send Message:</p>
                </div>
                <div>
                    <TextForm />
                </div>
            </div>
        )
    }
}