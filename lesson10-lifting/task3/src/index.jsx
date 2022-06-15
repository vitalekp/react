import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const rootElement = document.querySelector('#root');

const userId = 'facebook';

ReactDOM.render(<App userId={userId} />, rootElement);
