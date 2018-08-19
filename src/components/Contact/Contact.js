import React, {Component} from 'react';
import TextForm from './TextForm/TextForm'
// import DatePickerComp from './DatePickerComp/DatePickerComp'

export default class Contact extends Component {
    render(){
        return (
            <div>
                <h1>Contact</h1>
                <p>Phone Number: 801-785-9719</p>
                {/* <p>Desired Service Date: </p><DatePickerComp /> */}
                <p>-OR-</p><TextForm />
            </div>
        )
    }
}