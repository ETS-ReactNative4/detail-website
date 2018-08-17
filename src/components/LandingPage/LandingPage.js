import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
import axios from 'axios';



import './LandingPage.css'
import powerWasher from '../../images/foam-cannon.jpg';

export default class LandingPage extends Component {

    // handlePhotoApi(){
    //     axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${IMAGE_SEARCH_HERE}&client_id=${REACT_APP_UNSPLASH_PUBLIC_KEY_HERE}`)
    //         .then(photo => console.log(photo.data))
    //         .catch(err => console.log(err));
    // }

    render (){
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
                    <img className='landingPageImage' src={powerWasher} alt="" />
                </div>
            </div>
        )
    }
}