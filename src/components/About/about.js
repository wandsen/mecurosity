import React from 'react';
import styles from './style.css';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
        <div>
            <div className={styles.maincontent}>
                <div className='ui white inverted header' id={styles.name}>
                About Me!
                </div>

                <div className='ui white inverted header' id={styles.imagetext}>

                I offer strong interpersonal skills to develop global customer solutions with thought leadership coupled with a demonstrated history of working in the government administration and senior executives. To secure a challenging position to develop as a software developer professionally.
                </div>
            </div>
        </div>
    )
  }
}

export default About;