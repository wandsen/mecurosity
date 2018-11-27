import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import About from './components/About/about';
import CoverImage from './components/CoverImage/coverimage'



class App extends Component {
  render() {
    return (
      <div>
      <CoverImage/>

      <About />
      </div>
    );
  }
}

export default App;
