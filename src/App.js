import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
// import Login from './components/Login/Login';
import Private from './components/Private/Private';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <HashRouter>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/private' component={Private} />
          </Switch>
        </HashRouter>
      {/* <LandingPage /> */}
      </div>
    );
  }
}

export default App;
