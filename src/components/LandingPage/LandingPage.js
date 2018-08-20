import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
import axios from 'axios';



import './LandingPage.css'
// import powerWasher from '../../images/foam-cannon.jpg';
// require('dotenv').config();

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
        let randomizer = function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }

        const photo = await axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${IMAGE_SEARCH}&client_id=${REACT_APP_UNSPLASH_PUBLIC_KEY}`)
            this.setState({backgroundImage: photo.data.results[randomizer(9)].urls.regular})
            // .catch(err => console.log(err));
    }

    render (){
        console.log(this.state)
        // let IMAGE_SEARCH = 'car'
        // let REACT_APP_UNSPLASH_PUBLIC_KEY = process.env.REACT_APP_UNSPLASH_PUBLIC_KEY
        // let photoCall = axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${IMAGE_SEARCH}&client_id=${REACT_APP_UNSPLASH_PUBLIC_KEY}`)
        // .then(photo => console.log(photo.data))
        // .catch(err => console.log(err));
        // console.log(photoCall)
        
        return(
            <div className='wrapper'>
                <div className='cover'>
                    {/* <img className='landingPageImage' src={this.handlePhotoApi2} alt="" /> */}
                    <img className='landingPageImage' src={this.state.backgroundImage} alt="" />
                </div>
                <div>
                    <HashRouter>
                        <div className='pictureLinks'>
                            <Link to='/services' ><button id='LPButton'>Services</button></Link>
                            <Link to='/contact' ><button id='LPButton'>Contact</button></Link>
                        </div>
                    </HashRouter>
                </div>
            </div>
        )
    }
}