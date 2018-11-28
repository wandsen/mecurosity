import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import CoverImage from './components/CoverImage/coverimage';



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
            Home
          </a>
          <a className="item" value='about' onClick={()=> {this.returnEvent('about')}}>
            About Me
          </a>
          <a className="item" value='projects' onClick={()=> {this.returnEvent('projects')}}>
            Projects
          </a>
          <div className="right menu">
            <a className="ui item">
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}





class App extends React.Component {
  constructor() {
    super()

    this.state = {
      content: 'home'
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
    }else if(this.state.content === 'about'){
        mainContent = <About/>
    }else{
        mainContent = <Home/>
    }

    console.log(mainContent)
    return (
      <div>
          <Navigation onClickHandler={this.onClickHandler}/>
          <CoverImage/>
          {mainContent}

        <div class='ui inverted vertical footer segment'>
            <div class='ui center aligned container'>
                <div class='ui stackable inverted divided grid'>
                    <div class='ten wide column'>
                        <h4 class='ui inverted header'></h4>
                        <p>You can get in touch with D Sen if you have any interesting ideas on how to make the world a better place! </p>
                    </div>
                    <div class='six wide column'>
                        <h4 class='ui inverted header'>Contact</h4>
                        <div class='ui inverted link list'>
                            <a href='www.linkedin.com/in/dsenwan' class="item">Linkedin</a>
                            <a href='www.google.com' class="item">Email</a>
                            <a href='#' class="item">Press and Media</a>
                        </div>
                    </div>

                </div>
                <div class='ui inverted section divider'></div>
                <div class='ui horizontal inverted small divided link list'>
                    <a href='#' class="item">Site Map</a>
                    <a href='#' class="item">Contact Us</a>
                    <a href='#' class="item">Terms and Condition</a>
                    <a href='#' class="item">Privacy Policy</a>
                </div>

            </div>
        </div>

      </div>
    );
  }
}

export default App;
