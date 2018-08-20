import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import '../../../reset.css'
import '../Contact.css'

// import DatePickerComp from '../DatePickerComp/DatePickerComp'

export default class TextForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: '',
            startDate: moment(),
            name: '',
            phone: '',
            yearMakeModel:''
        }
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleText(){
        axios.post('/api/sms', {textMessage: this.state.message})
        .then(res => console.log(res))
    }

    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleNameInput(input){
        this.setState({
            name: input
        })
    }
    
    handlePhoneInput(input){
        this.setState({
            phone: input
        })
    }
    
    handleYearMakeModel(input){
        this.setState({
            yearMakeModel: input
        })
    }
    
    handleChange(event) {
        this.setState({
            message: `Desired Date: ${this.state.startDate} Name: ${this.state.name} Phone: ${this.state.phone} Car: ${this.state.yearMakeModel} Message: ${event.target.value}`
        })
    }

    render(){
        console.log(this.state)
        return (
            <div className='TextForm'>
                <br/>
                    <DatePicker
                    className='DatePicker'
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                    />
                <input placeholder='name' onChange={(e) => this.handleNameInput(e.target.value)} ></input>
                <input placeholder='phone' onChange={(e) => this.handlePhoneInput(e.target.value)} ></input>
                <input placeholder='year, make, model' onChange={(e) => this.handleYearMakeModel(e.target.value)} ></input>
                <textarea 
                name='message' 
                onChange={(event) => this.handleChange(event)}
                placeholder='Type your message here'>
                
                </textarea>

                <button className='MessageButton' onClick={() => this.handleText()} >Send Message</button>
            </div>
        )
    }
}