import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Home from './components/Home/home';
import Experience from './components/Experience/experience';
import Projects from './components/Projects/projects';
import CoverImage from './components/CoverImage/coverimage';
import Footer from './components/Footer/footer';


class Navigation extends Component {
  constructor() {
    super()

    this.returnEvent = this.returnEvent.bind(this);
  }


  returnEvent(event){
    console.log("running event", event)
    this.props.onClickHandler(event)
  }

  render() {

    console.log(this.props.onClickHandler)

    return (
      <div id='navbar'>
        <div className="ui secondary pointing menu">
          <a className="item" value='home' onClick={()=> {this.returnEvent('home')}} >
            Education
          </a>
          <a className="item" value='about' onClick={()=> {this.returnEvent('experience')}}>
            Experience
          </a>
          <a className="item" value='projects' onClick={()=> {this.returnEvent('projects')}}>
            Projects
          </a>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      content: 'experience'
    }

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event){
    console.log('setting state')
    this.setState({content: event})
  }

  render() {
    let mainContent = 'home'

    if(this.state.content === 'projects'){
        mainContent = <Projects/>
    }else if(this.state.content === 'experience'){
        mainContent = <Experience/>
    }else{
        mainContent = <Home/>
    }

    console.log(mainContent)
    return (
      <div>
          <CoverImage/>
          <Navigation onClickHandler={this.onClickHandler}/>

            {mainContent}
          <Footer/>

      </div>
    );
  }
}

export default App;
