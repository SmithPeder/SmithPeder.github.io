import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './Photo.js';
import Line from './Line.js';
import Tabular from './Tabular.js';
import styles from './index.css';

const App = () => {
  const info = {
    email: 'smith.peder@gmail.com',
    phone: '+47 97 60 83 81'
  };

  const social = {
    face: 'https://www.facebook.com/SmithPeder',
    linked: 'https://www.linkedin.com/in/peder-smith-219494114/',
    git: 'https://github.com/SmithPeder'
  };

  const socialImages = Object.keys(social).map(key => (
    <Photo src={`src/img/${key}.png`} link={social[key]} />
  ));

  return (
    <div>
      <Photo title="Peder Smith" src="src/img/me.png" size="large" />
      <Line txt="Contact me" />
      <Tabular info={info} />
      <Line txt="Find me" />
      <div className={styles.imgrow}>{socialImages}</div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
