import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Disputes from './disputeslist/dispute';
import LoginIcon from './Header/login.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login/login.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <LoginIcon />
            <div>
              <Route path="/general" component={Disputes} />
              <Route path="/login" component={Login} />
             
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
