import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './Photo.js';
import Line from './Line.js';
import Tabular from './Tabular.js';

const App = () => {
  const info = {
    email: 'smith.peder@gmail.com',
    phont: '+47 97 60 83 81'
  };

  return (
    <div>
      <Photo />
      <Line txt="Contact me" />
      <Tabular info={info} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
