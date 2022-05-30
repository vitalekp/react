import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElem = document.querySelector('#root');

ReactDOM.render(Greeting('John', 'Doe', new Date(2010, 3)), rootElem);
