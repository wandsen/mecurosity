import React from 'react';
import styles from './style.css';
import grocerimage from './grocer.png'
import malayimage from './malayme.png'
import mathgame from './mathgame.png'
import analazyer from './analazyer.png'

class Projects extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
        <div>
            <div className={styles.pad}></div>

            <div class='ui grid'>
              <div class='row'>
                <div class='four wide column'></div>
                <div class='eight wide column'>
                  <div class='ui small centered header'>
                    Showcasing Product Prototypes
                  </div>
                    Highly Interested in the exploration of unique business models to bring unlock value in society. Do contact me if you wish to further discuss some of these projects that i've done.
                </div>
                <div class='four wide column'></div>
              </div>
              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <img src={grocerimage} alt="Pic" class='ui image' />
                </div>
                <div class='eight wide column'>
                  <div class='ui small header centered'>
                    GrocerSub
                  </div>
                  <div class='ui segment'>
                    E-commerce app that explores the concept of subscriptions and how it is able to value-add to the modern consumer while achieving cost savings with bulk purchases and staggered delivery.
                    <div><a href='https://github.com/wandsen/GA-Capstone-Project'>Link to Github</a></div>
                  </div>
                </div>
                <div class='two wide column'></div>
              </div>
              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <img src={malayimage} alt="Pic" class='ui image' />
                </div>
                <div class='eight wide column'>
                  <div class='ui small header centered'>
                    Malay Me
                  </div>

                  <div class='ui segment'>
                    Language learning web application (focused on learning Malay) coupled with forums and video playlists management tools.
                    <div><a href='https://malayme.herokuapp.com/'>Link to Website</a></div>
                  </div>
                </div>
                <div class='two wide column'></div>
              </div>
              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <img src={analazyer} alt="Pic" class='ui image' />
                </div>
                <div class='eight wide column'>
                  <div class='ui small header centered'>
                    Analazyer
                  </div>

                  <div class='ui segment'>
                  An app that uses an external API to retrieve annual reports such as the income statement and balance sheet. This app uses node js and express.
                    <div><a href='https://analazyer.herokuapp.com/'>Link to Website</a></div>
                  </div>
                </div>
                <div class='two wide column'></div>
              </div>
              <div class='row'>
                <div class='two wide column'></div>
                <div class='three wide column'>
                  <img src={mathgame} alt="Pic" class='ui image' />
                </div>
                <div class='eight wide column'>
                  <div class='ui small header centered'>
                    Edutainer
                  </div>
                  <div class='ui segment'>

                  This is my first ever Javascript application. An education based web application to help kids (5-7yrs old) through incorporating game elements and animation to math problems. This app aims to explore the possibilities of "edu-tainment", a market with huge potential.
                    <div><a href='https://github.com/wandsen/Project1_KidsGame'>Link to Github</a></div>
                  </div>
                </div>
                <div class='two wide column'></div>
              </div>
            </div>

        <div className={styles.pad}></div>

        </div>
    )
  }
}

export default Projects;