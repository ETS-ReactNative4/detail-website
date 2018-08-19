import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// import DatePickerComp from '../DatePickerComp/DatePickerComp'

export default class TextForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: '',
            startDate: moment()
        }
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleText(){
        axios.post('/api/sms', {textMessage: this.state.message})
        .then(res => console.log(res))
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: `Desired Date: ${this.state.startDate} ${event.target.value}`
        })
    }

    handleDateChange(date) {
        this.setState({
          startDate: date
        });
      }

    render(){
        console.log(this.state.message)
        return (
            <div>
                    <DatePicker
                    // placeholderText='desired service date'
                    selected={this.state.startDate}
                    onChange={this.handleChange}/>

                <textarea 
                name='message' 
                onChange={(event) => this.handleChange(event)}
                placeholder='Type your message here. Leave your name and number so we can get back to you'>
                
                </textarea>

                <button onClick={() => this.handleText()} >Send Text</button>
            </div>
        )
    }
}