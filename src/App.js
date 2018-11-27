import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import About from './components/About/about';
import CoverImage from './components/CoverImage/coverimage'



class Navigation extends Component {

  render() {
    return (
      <div id='navbar'>
        <div class="ui secondary pointing menu">
          <a class="active item">
            Home
          </a>
          <a class="item">
            About Me
          </a>
          <a class="item">
            Projects
          </a>
          <div class="right menu">
            <a class="ui item">
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}





class App extends Component {

  render() {

    return (
      <div>
          <Navigation/>
          <CoverImage/>
          <About/>

      </div>
    );
  }
}

export default App;
