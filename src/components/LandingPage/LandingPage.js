import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
import axios from 'axios';



import './LandingPage.css'
import powerWasher from '../../images/foam-cannon.jpg';
require('dotenv').config();

export default class LandingPage extends Component {
    constructor(){
        super()

        this.state = {
            backgroundImage: ''
        }
    }

    componentDidMount(){
        this.handlePhotoApi()
    }

    async handlePhotoApi(){
        let IMAGE_SEARCH = 'car'
        let REACT_APP_UNSPLASH_PUBLIC_KEY = process.env.REACT_APP_UNSPLASH_PUBLIC_KEY

        const photo = await axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${IMAGE_SEARCH}&client_id=${REACT_APP_UNSPLASH_PUBLIC_KEY}`)
            this.setState({backgroundImage: photo.data.results[0].urls.regular})
            // .catch(err => console.log(err));
    }

    render (){
        console.log(this.state)
        return(
            <div>
                <p>LandingPage (Home)</p>
                <div>
                    <HashRouter>
                        <div className='pictureLinks'>
                            <Link to='/services' ><button>Services</button></Link>
                            <Link to='/scheduling' ><button>Schedule Now</button></Link>
                        </div>
                    </HashRouter>
                </div>
                <div>
                    {/* <img className='landingPageImage' src={powerWasher} alt="" /> */}
                    <img className='landingPageImage' src={this.state.backgroundImage} alt="" />
                    {/* {JSON.stringify(this.handlePhotoApi)} */}
                </div>
            </div>
        )
    }
}