import React, {Component} from 'react';
import axios from 'axios';

import './Services.css'
import InteriorExterior from './Interior-Exterior/Interior-Exterior'
import Interior from './InteriorOnly/InteriorOnly'
import Exterior from './ExteriorOnly/ExteriorOnly'

export default class Services extends Component {
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

    render(){
        return (
            <div>
                <div>
                    <div>
                    </div>
                    <div className='servicesWrapper'>
                        {/* <img className='landingPageImage' src={this.state.backgroundImage} alt="" /> */}
                        <div className='intExt'>
                            <InteriorExterior />
                        </div>
                        <div className='int'>
                            <Interior />
                        </div>
                        <div className='ext'>
                            <Exterior />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}