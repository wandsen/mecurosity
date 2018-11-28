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
        </div>
    )
  }
}

export default Projects;