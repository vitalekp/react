import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElem = document.querySelector('#root');

const user = {
  firstName: 'Vitalii',
  lastName: 'Push',
  birthDate: new Date(2000, 11),
};

ReactDOM.render(<Greeting user={user} />, rootElem);
