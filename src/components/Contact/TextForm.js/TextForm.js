import React, {Component} from 'react';
import axios from 'axios';

export default class TextForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: ''
        }
    }

    handleText(){
        axios.post('/api/sms', {textMessage: this.state.message})
        .then(res => console.log(res))
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        console.log(this.state.message)
        return (
            <div>
                <textarea 
                name='message' 
                onChange={(event) => this.handleChange(event)}
                placeholder='Type your message here. Leave your name and number so we can get back to you'></textarea>

                <button onClick={() => this.handleText()} >Send Text</button>
            </div>
        )
    }
}