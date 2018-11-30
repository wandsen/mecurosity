import React from 'react';
import styles from './style.css';

class CoverImage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
        <div className={styles.cover}>
            <div className={styles.coverimage}>
            </div>

            <div className={styles.maincontent}>
                <div className='ui white inverted header' id={styles.name}>
                Dsen Wan
                </div>

                <div className='ui white inverted header' id={styles.imagetext}>

                Keep your feet on the ground and your thoughts at lofty heights
                </div>

            </div>
        </div>



    );
  }
}

export default CoverImage;
