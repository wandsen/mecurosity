import React from 'react';
import styles from './style.css';

class Projects extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
        <div>
            <div class='ui grid'>
              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
                </div>
                <div class='eight wide column'>
                  <div class='ui small header centered'>
                    GrocerSub
                  </div>
                  <div class='ui segment'>
                  E-commerce app that explores the concept of subscriptions and how it is able to value-add to the modern consumer while achieving cost savings with bulk purchases and staggered delivery.
                  </div>
                </div>
                <div class='two wide column'></div>
              </div>
              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
                </div>
                <div class='eight wide column'>
                  <div class='ui small header centered'>
                    Malay Me
                  </div>

                  <div class='ui segment'>
                    Language learning web application (focused on learning Malay) coupled with forums and video playlists management tools.
                  </div>
                </div>
                <div class='two wide column'></div>
              </div>
              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
                </div>
                <div class='eight wide column'>
                  <div class='ui small header centered'>
                    Analazyer
                  </div>

                  <div class='ui segment'>
                    Language learning web application (focused on learning Malay) coupled with forums and video playlists management tools.
                  </div>
                </div>
                <div class='two wide column'></div>
              </div>
              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
                </div>
                <div class='eight wide column'>
                  <div class='ui small header centered'>
                    Edutainer
                  </div>
                  <div class='ui segment'>
                    An education based web application to help kids (5-7yrs old) through incorporating game elements and animation to math problems. This app aims to explore the possibilities of "edu-tainment", a market with huge potential.
                  </div>
                </div>
                <div class='two wide column'></div>
              </div>
            </div>


        </div>
    )
  }
}

export default Projects;