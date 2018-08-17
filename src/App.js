import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
// import Login from './components/Login/Login';
import Private from './components/Private/Private';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <HashRouter>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/private' component={Private} />
            <Route path='/services' component={Services} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </HashRouter>
      {/* <LandingPage /> */}
      </div>
    );
  }
}

export default App;
