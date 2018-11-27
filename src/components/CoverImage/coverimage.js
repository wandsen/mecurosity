import React from 'react';
import styles from './style.css';
import ProfileImage from './SriLanka.jpeg';

const profileImage = <img src={ProfileImage} className="image" alt="Logo" />;


class CoverImage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
        <div className={styles.cover}>
            <div className={styles.coverimage}>
                  <div className='ui huge white inverted header' id={styles.imagetext}>Keep your feet on the ground and your thoughts at lofty heights</div>
            </div>
        </div>
    );
  }
}

export default CoverImage;
