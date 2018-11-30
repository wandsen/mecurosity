import React from 'react';
import styles from './style.css';

class Projects extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
        <div>
            <div className={styles.maincontent}>
                <div className='ui white inverted header' id={styles.name}>
                Projects
                </div>

                <div className='ui white inverted header' id={styles.imagetext}>
                    <li>Grocer Sub – React, Express, Javascript, Semantic UI
                    E-commerce app that explores the concept of subscriptions and how it is able to value-add to the modern consumer while achieving cost savings with bulk purchases and staggered delivery.</li>

                    <li>Edutainer –HTML, CSS , Javascript, Bootstrap
                    An education based web application that explores the possibilities of "edu-tainment".</li>

                    <li>Analazyer - Node.js, Express.js, PostgreSQL, Bootstrap
                    Helps users to easily access annual financial reports and built-in tools to automate analysis.</li>

                    <li>MalayMe - Ruby on Rails, Semantic UI, PostgresSql
                    Language learning tool with features such as forums and video playlists management.</li>
                </div>

            </div>



            <div class='ui grid'>
              <div class='row'>
                <div class='three wide column'>
                  <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
                </div>
                <div class='thirteen wide column'>
                  <div class='ui small header centered'>
                    GrocerSub
                  </div>
                  <div class='ui segment'>
                  E-commerce app that explores the concept of subscriptions and how it is able to value-add to the modern consumer while achieving cost savings with bulk purchases and staggered delivery.
                  </div>



                </div>
              </div>
              <div class='row'>
                <div class='three wide column'>
                  <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
                </div>
                <div class='thirteen wide column'>
                  <div class='ui small header centered'>
                    Malay Me
                  </div>

                  <div class='ui segment'>
                    Language learning web application (focused on learning Malay) coupled with forums and video playlists management tools.
                  </div>

                </div>
              </div>
              <div class='row'>
                <div class='three wide column'>
                  <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
                </div>
                <div class='thirteen wide column'>
                  <div class='ui small header centered'>
                    Analazyer
                  </div>

                  <div class='ui segment'>
                    Language learning web application (focused on learning Malay) coupled with forums and video playlists management tools.
                  </div>

                </div>
              </div>
              <div class='row'>
                <div class='three wide column'>
                  <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
                </div>
                <div class='thirteen wide column'>
                  <div class='ui small header centered'>
                    Edutainer
                  </div>

                  <div class='ui segment'>
                    An education based web application to help kids (5-7yrs old) through incorporating game elements and animation to math problems. This app aims to explore the possibilities of "edu-tainment", a market with huge potential.
                  </div>

                </div>
              </div>
            </div>


        </div>
    )
  }
}

export default Projects;