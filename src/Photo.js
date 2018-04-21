import React, { Component } from 'react';
import styles from './Photo.css';

class Photo extends Component {
  render() {
    return (
      <div className={styles.root}>
        <img className={styles.img} src="src/img/me.png" />
        <h1>Peder Smith</h1>
      </div>
    );
  }
}

export default Photo;
