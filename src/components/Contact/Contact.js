import React, {Component} from 'react';
import TextForm from './TextForm.js/TextForm'

export default class Contact extends Component {
    render(){
        return (
            <div>
                <h1>Contact</h1>
                <TextForm />
                {/* <button>Send Text</button> */}
            </div>
        )
    }
}